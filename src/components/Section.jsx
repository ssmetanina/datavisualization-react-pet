import { useEffect, useState, useRef, forwardRef } from "react";

const Section = forwardRef(function Section(
    {children, className=""},
    externalRef,
) {
    const localRef = useRef(null);
    const sectionRef = externalRef ?? localRef;

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(el);
            }
            },
            { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(el);

        return () => observer.disconnect();
        }, []);


  return (
    <div
      ref={sectionRef}
      className={`section ${className} ${isVisible ? "visible" : ""}`}>
    {children}
    </div>
  )
})


export default Section