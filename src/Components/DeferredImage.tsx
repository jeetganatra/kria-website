import {
  useEffect,
  useRef,
  useState,
  type ImgHTMLAttributes,
} from "react";

const transparentPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

type ImageDecoding = NonNullable<
  ImgHTMLAttributes<HTMLImageElement>["decoding"]
>;

type FetchPriority = "high" | "low" | "auto";

type DeferredImageProps =
  ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    eager?: boolean;
    fetchPriority?: FetchPriority;
    rootMargin?: string;
    threshold?: number | number[];
  };

export function DeferredImage({
  src,
  eager = false,
  rootMargin = "300px",
  threshold = 0,
  loading,
  decoding = "async",
  fetchPriority,
  ...props
}: DeferredImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] =
    useState(
      () =>
        eager ||
        typeof IntersectionObserver ===
          "undefined",
    );

  useEffect(() => {
    if (shouldLoad) return;

    const image = imageRef.current;
    if (!image) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries.some(
            (entry) => entry.isIntersecting,
          )
        ) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, threshold]);

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : transparentPixel}
      data-src={shouldLoad ? undefined : src}
      loading={
        loading ??
        (eager ? "eager" : "lazy")
      }
      decoding={decoding as ImageDecoding}
      fetchPriority={
        fetchPriority ??
        (eager ? "high" : "auto")
      }
      {...props}
    />
  );
}
