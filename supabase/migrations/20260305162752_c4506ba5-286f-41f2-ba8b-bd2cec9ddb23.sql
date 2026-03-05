
-- Persistent rate limiting table
CREATE TABLE public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for fast lookups
CREATE INDEX idx_rate_limits_ip_endpoint_time ON public.rate_limits (ip_address, endpoint, created_at DESC);

-- Auto-cleanup: delete entries older than 5 minutes
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limits WHERE created_at < now() - interval '5 minutes';
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_cleanup_rate_limits
AFTER INSERT ON public.rate_limits
FOR EACH STATEMENT
EXECUTE FUNCTION public.cleanup_rate_limits();

-- RLS: no public access, only service role
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Rate check function for edge functions to call
CREATE OR REPLACE FUNCTION public.check_rate_limit(p_ip text, p_endpoint text, p_max int DEFAULT 5, p_window_seconds int DEFAULT 60)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count int;
BEGIN
  SELECT count(*) INTO recent_count
  FROM public.rate_limits
  WHERE ip_address = p_ip
    AND endpoint = p_endpoint
    AND created_at > now() - (p_window_seconds || ' seconds')::interval;

  IF recent_count >= p_max THEN
    RETURN false;
  END IF;

  INSERT INTO public.rate_limits (ip_address, endpoint) VALUES (p_ip, p_endpoint);
  RETURN true;
END;
$$;
