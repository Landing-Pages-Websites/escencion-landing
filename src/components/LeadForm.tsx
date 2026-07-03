"use client";

import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type ReactElement,
} from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { formatPhone, isValidPhone } from "@/hooks/usePhoneValidation";
import { ArrowRight, Check, ChevronDown } from "@/components/icons";

// ── Mega lead-routing config (real Escencion site/customer IDs) ──
const CUSTOMER_ID = "8edb6f3d-5374-48ad-ad52-41f6fc1fc387";
const SITE_ID = "3753f015-5636-43e6-8813-e531d5405087";
const SOURCE_PROVIDER = "web";
const CALENDLY_URL =
  "https://calendly.com/d/cx5d-rgv-bsw/msp-mssp-strategy-session";

const EMAIL_PATTERN = "[^@\\s]+@[^@\\s]+\\.[^@\\s]+";
const ROLE_OPTIONS = [
  "Sales and Marketing",
  "Operations and Admin",
  "Technical",
  "Leadership/Virtual CIO",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  full_name: string;
  work_email: string;
  phone: string;
  company_name: string;
  role_to_fill: string;
  is_msp_mssp_owner: string;
}

const EMPTY: FormState = {
  full_name: "",
  work_email: "",
  phone: "",
  company_name: "",
  role_to_fill: "",
  is_msp_mssp_owner: "",
};

function pushDataLayer(): void {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "form_submit" });
}

interface LeadFormProps {
  idPrefix: string;
}

export default function LeadForm({ idPrefix }: LeadFormProps): ReactElement {
  const { submit } = useMegaLeadForm({
    customer_id: CUSTOMER_ID,
    site_id: SITE_ID,
    source_provider: SOURCE_PROVIDER,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: name === "phone" ? formatPhone(value) : value,
      }));
    },
    []
  );

  const onSubmit = useCallback(async (): Promise<void> => {
    const form = formRef.current;
    if (!form || status === "submitting") return;
    // Validate FIRST — an empty/invalid submit must not fire an event or redirect.
    if (!form.reportValidity() || !isValidPhone(values.phone)) return;

    setStatus("submitting");
    try {
      const result = await submit({
        full_name: values.full_name.trim(),
        work_email: values.work_email.trim(),
        phone: values.phone,
        company_name: values.company_name.trim(),
        role_to_fill: values.role_to_fill,
        is_msp_mssp_owner: values.is_msp_mssp_owner,
      });
      if (result.ok) {
        pushDataLayer();
        setStatus("success");
        window.location.href = CALENDLY_URL;
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }, [status, submit, values]);

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="h3 text-ink">You&apos;re in.</h3>
        <p className="text-sm text-muted">
          Success — redirecting you to book your strategy session&hellip;
        </p>
      </div>
    );
  }

  const id = (name: string): string => `${idPrefix}-${name}`;
  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <div className="field sm:col-span-2">
        <label htmlFor={id("full_name")}>
          Full Name <span className="req">*</span>
        </label>
        <input
          id={id("full_name")}
          name="full_name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          required
          value={values.full_name}
          onChange={onChange}
        />
      </div>

      <div className="field">
        <label htmlFor={id("work_email")}>
          Work Email <span className="req">*</span>
        </label>
        <input
          id={id("work_email")}
          name="work_email"
          type="email"
          inputMode="email"
          autoComplete="email"
          pattern={EMAIL_PATTERN}
          placeholder="jane@yourshop.com"
          required
          value={values.work_email}
          onChange={onChange}
        />
      </div>

      <div className="field">
        <label htmlFor={id("phone")}>
          Phone Number <span className="req">*</span>
        </label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          pattern="\(\d{3}\) \d{3}-\d{4}"
          placeholder="(555) 555-5555"
          required
          value={values.phone}
          onChange={onChange}
        />
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor={id("company_name")}>
          Company Name <span className="req">*</span>
        </label>
        <input
          id={id("company_name")}
          name="company_name"
          type="text"
          autoComplete="organization"
          placeholder="Your MSP / MSSP"
          required
          value={values.company_name}
          onChange={onChange}
        />
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor={id("role_to_fill")}>
          Role looking to fill <span className="req">*</span>
        </label>
        <div className="relative">
          <select
            id={id("role_to_fill")}
            name="role_to_fill"
            required
            className="appearance-none"
            style={{ backgroundImage: "none" }}
            value={values.role_to_fill}
            onChange={onChange}
          >
            <option value="" disabled>
              Select a role area…
            </option>
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor={id("is_msp_mssp_owner")}>
          Are you an MSP or MSSP business owner? <span className="req">*</span>
        </label>
        <div className="relative">
          <select
            id={id("is_msp_mssp_owner")}
            name="is_msp_mssp_owner"
            required
            className="appearance-none"
            style={{ backgroundImage: "none" }}
            value={values.is_msp_mssp_owner}
            onChange={onChange}
          >
            <option value="" disabled>
              Select one…
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-[var(--color-error)] sm:col-span-2" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          aria-label="Get Started — book your MSP / MSSP strategy session"
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-ink-dark)] transition-all duration-150 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(95,233,222,0.35)] active:translate-y-px disabled:cursor-not-allowed disabled:bg-muted-2 disabled:shadow-none"
        >
          {submitting ? "Sending…" : "Get Started"}
          {!submitting && (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
        <p className="mt-3 text-center text-xs text-muted-2">
          No spam. A short, no-pressure call — for MSP &amp; MSSP owners only.
        </p>
      </div>
    </form>
  );
}
