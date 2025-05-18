import Link from 'next/link';
import { Globe, MessageCircle } from 'lucide-react';
// Removed Tooltip imports as they are no longer used for the WhatsApp link specifically
// If other tooltips are present, these imports might still be needed.
// For now, assuming this was the only tooltip usage in this component.

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between p-2">
        <Link href="/" aria-label="Pagina inicial">
          <img src="/oie_pnD9PzjNbeOy.png" alt="SiteGeadres logo" className="h-7" />
        </Link>
        
        <div className="flex items-center gap-4"> 

          <div className="flex items-center gap-4"> 
            <Link
              href="https://ia.maestrialaw.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-primary/80 transition-colors text-sm"
            >
              <Globe className="mr-2 h-4 w-4" />
              <span className="font-bold">Site</span>
            </Link>

            <Link
              href="https://chat.whatsapp.com/DqpPsULCjyg9UYrQQnHGRp"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-primary/80 transition-colors text-sm"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              <span className="font-bold">Grupo de Discussão</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
