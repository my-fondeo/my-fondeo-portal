import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './shared_DDkQUPVS.mjs';
import 'es-module-lexer';
import './astro/server_BGGZ-78z.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

export { apiContextRoutesSymbol as a, shouldAppendForwardSlash as s };
