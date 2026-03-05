
-- Fix 1: Restrict check_rate_limit to service_role only
REVOKE EXECUTE ON FUNCTION public.check_rate_limit(text, text, int, int) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.check_rate_limit(text, text, int, int) FROM anon;
REVOKE EXECUTE ON FUNCTION public.check_rate_limit(text, text, int, int) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.check_rate_limit(text, text, int, int) TO service_role;
