"use client"

import { FormEvent, useState } from "react"

const ratingQuestions = [
  ["stem", "I enjoyed the STEM workshop."],
  ["financial_literacy", "I learned something useful about financial literacy, college, or careers."],
  ["civic_involvement", "I learned something useful about political and social involvement."],
  ["mental_health", "The mental health and conflict resolution workshop was helpful."],
  ["wellness", "I learned something useful about nutrition and wellness."],
  ["documentary", "The Edpuzzle documentary helped me think about important issues."],
  ["black_history", "The Black History Moment taught me something new or inspired me."],
  ["overall", "Overall, I enjoyed the conference."],
] as const

const ratingLabels = ["Strongly disagree", "Disagree", "Not sure", "Agree", "Strongly agree"]

export default function ConferenceEvaluationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })

      if (!response.ok) throw new Error("Submission failed")
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      action="https://formspree.io/f/xeajjwyj"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gold/30 bg-white p-5 shadow-xl md:p-8"
    >
      <input type="hidden" name="form_name" value="2026 Msichana Mvulana Conference Evaluation" />
      <input type="hidden" name="event_date" value="November 14, 2026" />

      <div className="mb-7">
        <h2 className="text-3xl font-bold text-deep-blue">Participant Evaluation</h2>
        <p className="mt-2 text-gray-600">Your answers help SBM improve future programs. All fields are required unless marked optional.</p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <label className="font-medium text-gray-700">
          Age
          <input required name="age" type="number" min="5" max="25" className="mt-1 w-full rounded-md border px-3 py-2" />
        </label>
        <label className="font-medium text-gray-700">
          Grade
          <input required name="grade" className="mt-1 w-full rounded-md border px-3 py-2" />
        </label>
        <label className="font-medium text-gray-700">
          Group <span className="font-normal text-gray-500">(optional)</span>
          <input name="group" className="mt-1 w-full rounded-md border px-3 py-2" />
        </label>
      </div>

      <fieldset className="space-y-6">
        <legend className="mb-2 text-lg font-semibold text-deep-blue">Rate each statement from 1 to 5</legend>
        <p className="text-sm text-gray-600">1 means strongly disagree and 5 means strongly agree.</p>
        {ratingQuestions.map(([name, question], questionIndex) => (
          <fieldset key={name} className="rounded-xl border border-gray-200 p-4">
            <legend className="px-1 font-medium text-gray-800">{question}</legend>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {ratingLabels.map((label, index) => (
                <label key={label} className="flex cursor-pointer flex-col items-center gap-1 rounded-lg border p-2 text-center text-xs hover:border-gold hover:bg-gold/5">
                  <input
                    required
                    type="radio"
                    name={name}
                    value={index + 1}
                    aria-label={`${question} ${index + 1}, ${label}`}
                    className="h-5 w-5 accent-burgundy"
                  />
                  <span className="font-bold text-deep-blue">{index + 1}</span>
                  <span className="hidden text-gray-500 md:block">{ratingLabels[index]}</span>
                </label>
              ))}
            </div>
            {questionIndex === 0 ? <p className="mt-2 text-xs text-gray-500 md:hidden">1 = strongly disagree · 5 = strongly agree</p> : null}
          </fieldset>
        ))}
      </fieldset>

      <label className="mt-7 block font-semibold text-deep-blue">
        What is one thing you learned today that you will remember?
        <textarea required name="memorable_lesson" rows={4} className="mt-2 w-full rounded-md border px-3 py-2 font-normal text-gray-800" />
      </label>

      {status === "success" ? (
        <div role="status" className="mt-6 rounded-lg bg-green-50 p-4 font-semibold text-green-800">
          Thank you for sharing your feedback!
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 rounded-full bg-gradient-to-r from-gold to-burgundy px-8 py-3 font-bold text-white shadow-lg transition hover:shadow-xl disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Sending feedback..." : "Submit Feedback"}
        </button>
      )}

      {status === "error" ? (
        <p role="alert" className="mt-4 text-red-700">We could not send your feedback. Please check your connection and try again.</p>
      ) : null}
    </form>
  )
}
