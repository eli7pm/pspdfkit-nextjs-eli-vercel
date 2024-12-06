"use client";
import React, { useEffect, useRef, useCallback} from "react";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit, instance;

    (async function () {
   
        PSPDFKit = await import('pspdfkit')

        PSPDFKit.unload(container)

        instance = await PSPDFKit.load({
          container,
          document: "/example.pdf",
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
        });
  
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <>
      <div ref={containerRef} style={{ height: "100vh" }} />
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}
