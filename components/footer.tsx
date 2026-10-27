"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = ({
  showFacebookDisclaimer = true,
}: {
  showFacebookDisclaimer?: boolean;
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 border-t border-border px-4 py-12 text-center"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1.5 text-[13px] font-medium tracking-tight"
        >
          <img src="/logo-edm.webp" alt="" width={22} height={22} className="size-[22px] rounded-md" />
          L’École des Monteurs
        </Link>
        <p className="text-xs leading-relaxed text-muted-foreground">
          © {year} - ecole-monteurs.com - Tous droits réservés.
        </p>
        {showFacebookDisclaimer && (
          <p className="max-w-xl text-[11px] leading-relaxed text-muted-foreground/80">
            Ce site ne fait pas partie du site Web de Facebook ou de Facebook
            Inc. De plus, ce site n’est en aucun cas approuvé par Facebook.
            FACEBOOK est une marque commerciale de FACEBOOK, Inc.
          </p>
        )}
        <Link
          href="/legal"
          className="text-xs text-muted-foreground underline underline-offset-[3px] transition-colors hover:text-foreground"
        >
          Mentions légales
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
