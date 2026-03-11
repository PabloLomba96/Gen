/**
 * Verbal Rebranding Utility
 * Highlights the syllable "gen" inside target psychology-related words
 * with the brand's primary color and italic styling.
 *
 * Usage: brandGen("neurodivergencia") → "neurodiver<span ...>gen</span>cia"
 * Render with dangerouslySetInnerHTML={{ __html: brandGen(text) }}
 */

const GEN = '<span class="text-primary font-semibold">gen</span>';

// Ordered longest-first to avoid partial replacements
const BRAND_PATTERNS: RegExp[] = [
  /neurodivergencias/gi,
  /neurodivergencia/gi,
  /neurodivergence/gi,
  /autoexigencia/gi,
  /inteligencia/gi,
  /intelligence/gi,
  /progenitores/gi,
  /autoimagen/gi,
  /generación/gi,
  /generation/gi,
  /regenerar/gi,
  /regenerate/gi,
  /divergentes/gi,
  /divergente(?!s)/gi,
  /divergent\b/gi,
  /agendamos/gi,
  /urgencia/gi,
  /urgency/gi,
  /agencia/gi,
  /agency\b/gi,
  /oxígeno/gi,
  /oxygen\b/gi,
  /genuina/gi,
  /genuine/gi,
  /generar/gi,
  /origen\b/gi,
  /origin\b/gi,
  /genial/gi,
  /genio\b/gi,
  /genius/gi,
  /genera(?!\w)/gi,
];

export function brandGen(text: string): string {
  if (!text || text.includes('font-semibold italic')) return text;

  let result = text;
  for (const pattern of BRAND_PATTERNS) {
    result = result.replace(pattern, (match) => match.replace(/gen/i, GEN));
  }

  // Exception: "Centro Divergentes" is a proper name — never brand it
  result = result.replace(
    /Centro Diver<span class="text-primary font-semibold italic">gen<\/span>tes/g,
    'Centro Divergentes',
  );

  return result;
}
