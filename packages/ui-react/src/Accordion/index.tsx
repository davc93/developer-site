import { HTMLAttributes, Children, cloneElement, useRef } from "react";
import "ui-styles/src/accordion.css";
import { ArrowIcon } from "@/Icons/ArrowIcon";

type AccordionProps = {};

type NativeProps = HTMLAttributes<HTMLDivElement>;

export const Accordion = ({
  children,
  className,
  ...props
}: AccordionProps & NativeProps) => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    accordionRef.current?.classList.toggle("accordion--open");
  };

  return (
    <div
      className={["accordion", className].join(" ")}
      ref={accordionRef}
      {...props}
    >
      {Children.map(children, (child: any, index) => {
        return cloneElement(child, {
          toggleAccordion,
          key: index,
        });
      })}
    </div>
  );
};

type AccordionSummaryProps = {
  toggleAccordion?: () => void;
  expandedIcon: JSX.Element;
};

export const AccordionSummary = ({
  className,
  children,
  toggleAccordion,
  expandedIcon,
  ...props
}: AccordionSummaryProps & NativeProps) => {
  return (
    <div
      onClick={toggleAccordion}
      className={["accordion-summary", className].join(" ")}
      {...props}
    >
      {children}
      <div className="accordion-summary__icon">{expandedIcon}</div>
    </div>
  );
};

type AccordionDetailProps = {};

export const AccordionDetail = ({
  className,
  children,
  ...props
}: AccordionDetailProps & NativeProps) => {
  return (
    <div className={["accordion-detail", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export const Example = () => {
  return (
    <Accordion>
      <AccordionSummary
        style={{ color: "white", background: "var(--surface--500)" }}
        expandedIcon={<ArrowIcon />}
      >
        Accordion 1
      </AccordionSummary>
      <AccordionDetail>
        <div style={{ color: "white", background: "var(--surface--300)" }}>
          Content 1
        </div>
      </AccordionDetail>
    </Accordion>
  );
};
