"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const KEY = "kh_cookie_ok";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage non disponibile: non mostriamo il banner */
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="container-x">
        <div className="panel-solid flex flex-col items-start gap-3 p-4 shadow-lift sm:flex-row sm:items-center sm:gap-4 sm:p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
            <Cookie className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed u-body">
            Questo sito utilizza solo <strong className="u-ink">cookie tecnici</strong>{" "}
            necessari al funzionamento. Nessun cookie di profilazione o tracciamento.{" "}
            <Link
              href="/privacy"
              className="font-medium text-gold-deep underline-offset-2 hover:underline"
            >
              Privacy &amp; Cookie
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={accept}
            className="btn btn-gold h-10 shrink-0 px-6 text-sm sm:ml-auto"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
}
