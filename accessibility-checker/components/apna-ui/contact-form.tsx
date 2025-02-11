"use client"

import { useState } from "react"
import { submitContactForm } from "../../lib/action"

export default function ContactForm() {
    
  const [state, setState] = useState<{ errors: { name: string[]; email: string[]; message: string[] }; message: string | undefined }>({ errors: { name: [], email: [], message: [] }, message: undefined });
  const [isPending, setIsPending] = useState(false);

  const formAction = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const result = await submitContactForm(state, formData) as { errors: { name: string[]; email: string[]; message: string[] }; message: string | undefined };
    result.errors = {
      name: result.errors?.name || [],
      email: result.errors?.email || [],
      message: result.errors?.message || []
    };
    setState(result);
    setIsPending(false);
  };

  return (
    <form onSubmit={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {state?.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {state?.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        ></textarea>
        {state?.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state?.message && (
        <p className="mt-4 text-green-600" role="alert">
          {state.message}
        </p>
      )}
    </form>
  )
}

