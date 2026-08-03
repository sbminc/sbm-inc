"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const router = useRouter();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Event dates for real events
  const eventMap: { [key: string]: string } = {
    "2026-11-14": "/events",
  };
  const eventDates = Object.keys(eventMap).map(dateStr => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  });

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const renderCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 md:h-16"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const dateKey = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      const hasEvent = eventDates.some(
        (eventDate) =>
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear(),
      )
      const handleClick = () => {
        if (eventMap[dateKey]) {
          router.push(eventMap[dateKey]);
        }
      };
      days.push(
        <div
          key={day}
          className={`h-12 md:h-16 flex items-center justify-center relative ${hasEvent ? "font-bold cursor-pointer" : ""}`}
          onClick={hasEvent ? handleClick : undefined}
          style={hasEvent ? { cursor: "pointer" } : {}}
        >
          <span
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              hasEvent ? "bg-gradient-to-r from-gold to-burgundy text-white" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {day}
          </span>
        </div>,
      )
    }

    return days
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-blue">
              Events <span className="shimmer-text">Calendar</span>
            </h2>
            <p className="text-lg text-gray-600">Plan ahead and mark your calendar for our upcoming events.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <button
                onClick={prevMonth}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft size={24} />
              </button>
              <h3 className="text-xl font-semibold">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="h-10 flex items-center justify-center font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gold to-burgundy mr-2"></div>
                  <span className="text-sm text-gray-600">Event Day</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Click on an event day to see details or check our events list for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
