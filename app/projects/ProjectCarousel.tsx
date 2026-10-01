"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "./projects.data";

export function ProjectCarousel({
  images,
  title,
  priority = false,
}: Pick<Project, "images" | "title"> & { priority?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [{ index, previous, direction }, setSlide] = useState({
    index: 0,
    previous: -1,
    direction: 1,
  });
  const multiple = images.length > 1;
  const image = images[index];

  if (!image) return null;

  function move(direction: number) {
    setSlide((current) => ({
      index: (current.index + direction + images.length) % images.length,
      previous: current.index,
      direction,
    }));
  }

  return (
    <section
      aria-label={`${title} screenshots`}
      aria-roledescription={multiple ? "carousel" : undefined}
      className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
      onKeyDown={(event) => {
        if (dialog.current?.open) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <button
        key={index}
        type="button"
        aria-label={`Enlarge image: ${image.alt}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="relative block aspect-video w-full cursor-pointer overflow-hidden bg-black/20 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lime-300"
        style={{ "--slide-offset": `${direction * 100}%` } as CSSProperties}
      >
        {images[previous] && (
          <Image
            src={images[previous].src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 44rem, 100vw"
            className="hidden object-contain motion-safe:block motion-safe:animate-[project-image-out_280ms_ease-in-out_both]"
          />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 44rem, 100vw"
          className={`object-contain ${previous >= 0 ? "motion-safe:animate-[project-image-in_280ms_ease-in-out_both]" : ""}`}
          priority={priority && index === 0}
        />
      </button>
      {multiple && (
        <div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => move(-1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded text-zinc-300 transition hover:bg-white/10 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span
            aria-live="polite"
            aria-atomic="true"
            className="font-mono text-xs text-lime-300"
          >
            {index + 1} / {images.length}
          </span>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => move(1)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded text-zinc-300 transition hover:bg-white/10 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        aria-label={`${title}: enlarged image`}
        className="fixed inset-0 m-auto h-[90dvh] max-h-none w-[95vw] max-w-7xl rounded-lg border border-white/10 bg-zinc-950 p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          type="button"
          aria-label="Close enlarged image"
          onClick={() => dialog.current?.close()}
          className="absolute top-3 right-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded bg-zinc-950/80 text-zinc-300 transition hover:bg-white/10 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="95vw"
          className="object-contain"
        />
      </dialog>
    </section>
  );
}
