"use client";

import { useState, useRef } from "react";



const rateRows = [
    { label: "Room Rate:", value: "₹50,847 / night", muted: true },
    { label: "Taxes:", value: "₹9,153", muted: true },
    { label: "Subtotal:", value: "₹60,000", muted: true },
    { label: "Service Fee (3.5%):", value: "₹2,100", muted: true },
];


/* ─── helpers ─────────────────────────────────────────────────── */
const toDateInput = (d) => d.toISOString().split("T")[0];
const fromInput = (s) => new Date(s + "T00:00:00");
const fmtDisplay = (d) => d.toLocaleDateString("en-GB").replace(/\//g, "/"); // DD/MM/YYYY

const diffNights = (a, b) =>
    Math.max(0, Math.round((b.getTime() - a.getTime()) / 86_400_000));

const formatINR = (n) =>
    "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

const today = new Date();
today.setHours(0, 0, 0, 0);
// ✅ Fixed
const defaultCheckIn = new Date("2026-09-21");
const defaultCheckOut = new Date("2026-09-24");


/* ─── DateField ───────────────────────────────────────────────── */
function DateField({ label, value, min, onChange }) {
    const inputRef = useRef(null);

    return (
        <div className="flex items-center justify-between gap-4">
            <label className="text-xs tracking-widest text-[#7a6a55] uppercase w-36 shrink-0">
                {label}
            </label>

            <div
                className="relative flex-1 flex items-center justify-between border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm cursor-pointer hover:border-[#b5924c] transition-colors group"
                onClick={() => inputRef.current?.showPicker?.()}
            >
                <span className="text-sm COLOR_TEXT_RED select-none">{fmtDisplay(value)}</span>

                <svg
                    className="w-4 h-4 COLOR_TEXT_RED group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" />
                    <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.5" />
                </svg>

                {/* Invisible native date input — triggers browser picker */}
                <input
                    ref={inputRef}
                    type="date"
                    value={toDateInput(value)}
                    min={min ? toDateInput(min) : undefined}
                    onChange={(e) => e.target.value && onChange(fromInput(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
            </div>
        </div>
    );
}

/* ─── BookingForm ─────────────────────────────────────────────── */
export default function ReserveYourStay() {
    const [checkIn, setCheckIn] = useState(defaultCheckIn);
    const [checkOut, setCheckOut] = useState(defaultCheckOut);
    const [rooms, setRooms] = useState(1);
    const [guests, setGuests] = useState(2);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const nights = diffNights(checkIn, checkOut);
    const pricePerRoomPerNight = 62100;
    const total = rooms * nights * pricePerRoomPerNight;

    /* keep checkout always at least 1 night after checkin */
    const handleCheckIn = (d) => {
        setCheckIn(d);
        if (d >= checkOut) {
            const next = new Date(d);
            next.setDate(d.getDate() + 1);
            setCheckOut(next);
        }
    };

    const minCheckOut = new Date(checkIn);
    minCheckOut.setDate(checkIn.getDate() + 1);

    return (
        <>

        <div className=" w-full h-fit flex flex-col justify-center gap-5 max-lg:gap-2 items-center COLOR_BG_RED pt-[100px] pb-[50px]">
             <h2 className="COLOR_TEXT_CREAM uppercase Font_Q"> Reserve Your Stay</h2>
             <p className="COLOR_TEXT_CREAM mt-2 capitalize Font_YV">Experience elegance craft for your celebration</p>
        </div>
        
        <div className="min-h-screen COLOR_BG_RED w-full flex items-center justify-center p-4 max-lg:flex-col font-serif  gap-20 max-lg:gap-10 py-[50px] ">

            {/* left */}
            <div className="h-fit  max-lg:w-full mb-auto COLOR_TEXT_CREAM flex items-start sm:items-center justify-center p-4 sm:p-8">

                

                <div className="relative w-full max-w-sm sm:max-w-md COLOR_TEXT_CREAM">

                    {/* ── Page title ── */}
                    <h1
                        className="text-2xl sm:text-3xl COLOR_TEXT_RED tracking-wide mb-1 Font_Q COLOR_TEXT_CREAM"
                        
                    >
                        Rate Bifurcation
                    </h1>
                    <div className="w-10 h-px bg-[#b5924c] mb-6" />

                    {/* ── Meta info ── */}
                    <div className="space-y-1.5 mb-6 COLOR_TEXT_CREAM Font_Q">
                        <MetaRow className="COLOR_TEXT_CREAM" label="Venue" value="Sonal's Kushie" />
                        <MetaRow className="COLOR_TEXT_CREAM" label="Location" value="Luxury Wedding Destination" />
                        <MetaRow className="COLOR_TEXT_CREAM" label="Dates Available" value="21 – 24 September 2026" />
                    </div>

                    {/* ── Rate card ── */}
                    <div className=" COLOR_BG_RED rounded-sm shadow-[0_4px_32px_rgba(120,90,40,0.08)] COLOR_TEXT_CREAM">

                        {/* Card header */}
                        <div className="flex items-center justify-between px-5 sm:px-6 py-4  ">
                            <span
                                className="text-base sm:text-lg COLOR_TEXT_CREAM tracking-wide Font_Q"
                               
                            >
                                Rate Bifurcation
                            </span>
                            <span
                                className="text-base sm:text-lg COLOR_TEXT_CREAM font-semibold tabular-nums Font_YV"
                                
                            >
                                ₹62,100
                            </span>
                        </div>

                        {/* Line items */}
                        <div className="px-5 sm:px-6 py-4 space-y-3">
                            {rateRows.map(({ label, value }) => (
                                <div key={label} className="flex items-center justify-between gap-4 Font_YV">
                                    <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tracking-wide">{label}</span>
                                    <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tabular-nums font-medium">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Total row */}
                        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-t COLOR_TEXT_CREAM  ">
                            <span
                                className="text-base sm:text-lg COLOR_TEXT_CREAM tracking-wide Font_Q"
                                
                            >
                                Total:
                            </span>
                            <span
                                className="text-xl sm:text-2xl COLOR_TEXT_CREAM tabular-nums"
                                style={{ fontFamily: "'Cormorant Garamond','Georgia',serif", fontWeight: 600 }}
                            >
                                ₹62,100
                            </span>
                        </div>
                    </div>

                    {/* ── Contact info ── */}
                    <div className="mt-6 space-y-2.5">
                        <ContactRow icon="email" text="sonalskushie@gmail.com" />
                        <ContactRow icon="phone" text="+91 93588 00614" />
                        <ContactRow icon="phone" text="+91 93100 69102" />
                    </div>

                    {/* ── Legal copy ── */}
                    <div className="mt-5 space-y-3">
                        <p className="text-[11px] sm:text-xs text-[#7a6a55] Font_YV leading-relaxed COLOR_TEXT_CREAM">
                            The amount transferred is non refundable and non transferrable.
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#7a6a55] Font_YV leading-relaxed COLOR_TEXT_CREAM">
                            You agree to share information entered on this page with Sonal's Kushie
                            (owner of this page) and Razorpay, adhering to their terms and conditions.
                        </p>
                    </div>

                   
                </div>

              
            </div>

            {/* center */}
            <div className="flex flex-col items-center gap-3 mt-8 h-[50vh] max-lg:h-fit max-lg:hidden">
                <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#EFDFCB] to-transparent opacity-50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#b5924c] opacity-60" />
                <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#EFDFCB] to-transparent opacity-50" />
            </div>

            {/* Right */}
            <div className="relative w-full max-w-md ">

                {/* Card */}
                <div className="COLOR_BG_CREAM border border-[#e2d9c8] shadow-[0_8px_48px_rgba(120,90,40,0.10)] rounded-sm px-8 pt-10 pb-8">

                    {/* Header */}
                    <h1
                        className="text-2xl COLOR_TEXT_RED tracking-wide mb-1 Font_Q"

                    >
                        Complete Your Booking
                    </h1>
                    <div className="w-10 h-px COLOR_BG_CREAM mb-8" />

                    <div className="space-y-5 Font_YV ">

                        {/* Check-in */}
                        <DateField
                            label="Check-in Date"
                            value={checkIn}
                            min={today}
                            onChange={handleCheckIn}
                        />

                        {/* Check-out */}
                        <DateField
                            label="Check-out Date"
                            value={checkOut}
                            min={minCheckOut}
                            onChange={setCheckOut}
                        />

                        {/* Nights badge */}
                        {nights > 0 && (
                            <div className="flex justify-end -mt-1">
                                <span className="text-[10px] tracking-widest uppercase COLOR_TEXT_RED border border-[#e2d9c8] COLOR_BG_CREAM px-2.5 py-0.5 rounded-full">
                                    {nights} night{nights !== 1 ? "s" : ""}
                                </span>
                            </div>
                        )}

                        {/* Number of Rooms */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="text-xs tracking-widest text-[#7a6a55] uppercase w-36 shrink-0 Font_YV ">
                                Number of Rooms
                            </label>
                            <div className="flex-1 flex items-center justify-between border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm">
                                <button
                                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                >−</button>
                                <span className="text-sm COLOR_TEXT_RED font-medium">{rooms}</span>
                                <button
                                    onClick={() => setRooms(rooms + 1)}
                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                >+</button>
                            </div>
                        </div>

                        {/* Guests */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="text-xs tracking-widest Font_YV  text-[#7a6a55] uppercase w-36 shrink-0">
                                For Room 1
                            </label>
                            <div className="flex-1 flex items-center justify-between border border-[#d8cdb8] bg-white px-3 py-2 rounded-sm">
                                <button
                                    onClick={() => setGuests(Math.max(1, guests - 1))}
                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                >−</button>
                                <span className="text-sm COLOR_TEXT_RED font-medium">{guests}</span>
                                <button
                                    onClick={() => setGuests(guests + 1)}
                                    className="w-6 h-6 flex items-center justify-center COLOR_TEXT_RED hover:bg-[#f5ede0] rounded-sm transition-colors text-lg leading-none"
                                >+</button>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="text-xs tracking-widest text-[#7a6a55] Font_YV  uppercase w-36 shrink-0">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 border border-[#d8cdb8] Font_YV  bg-white px-3 py-2 rounded-sm text-sm COLOR_TEXT_RED placeholder-[#c0b49a] outline-none focus:border-[#b5924c] transition-colors"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="text-xs tracking-widest text-[#7a6a55] Font_YV  uppercase w-36 shrink-0">
                                Phone
                            </label>
                            <div className="flex-1 flex border border-[#d8cdb8] bg-white rounded-sm overflow-hidden focus-within:border-[#b5924c] transition-colors">
                                <span className="px-3 py-2 text-sm text-[#7a6a55] border-r border-[#d8cdb8] bg-[#f9f6f1]">+91</span>
                                <input
                                    type="tel"
                                    placeholder="Your phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="flex-1 px-3 py-2 text-sm Font_YV  COLOR_TEXT_RED placeholder-[#c0b49a] outline-none bg-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 border border-[#e2d9c8] bg-[#f5f0e8] rounded-sm px-5 py-4 Font_YV ">
                        <p className="text-sm COLOR_TEXT_RED font-medium tracking-wide">
                            {rooms} Room{rooms > 1 ? "s" : ""} × {nights} Night{nights !== 1 ? "s" : ""}
                        </p>
                        <p className="text-xs text-[#7a6a55] mt-0.5">
                            Guests: {guests} Adult{guests > 1 ? "s" : ""}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-sm tracking-widest text-[#7a6a55] uppercase">Total:</span>
                            <span
                                className="text-2xl COLOR_TEXT_RED tabular-nums"
                                style={{ fontFamily: "'Cormorant Garamond','Georgia',serif", fontWeight: 600 }}
                            >
                                {nights > 0 ? formatINR(total) : "—"}
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        disabled={nights === 0}
                        className="mt-5 w-full py-3.5 bg-gradient-to-r from-[#b5924c] via-[#c9a55a] to-[#b5924c] text-white text-sm tracking-[0.2em] uppercase font-medium hover:from-[#a07d3a] hover:via-[#b5924c] hover:to-[#a07d3a] transition-all duration-300 shadow-[0_2px_16px_rgba(181,146,76,0.30)] rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        {nights > 0 ? `Pay ${formatINR(total)}` : "Select dates to continue"}
                    </button>

                    {/* Payment icons */}
                    <div className="mt-4 flex items-center justify-center gap-3">
                        <span className="text-[10px] font-bold tracking-widest text-[#7a6a55] border border-[#d8cdb8] px-2 py-0.5 rounded-sm">UPI</span>
                        <span className="text-[11px] font-black italic text-[#1a1f6e] tracking-wider">VISA</span>
                        <div className="flex -space-x-1.5">
                            <div className="w-5 h-5 rounded-full bg-[#eb001b] opacity-90" />
                            <div className="w-5 h-5 rounded-full bg-[#f79e1b] opacity-90" />
                        </div>
                        <span className="text-[10px] font-bold tracking-wider COLOR_TEXT_RED border border-[#d8cdb8] px-2 py-0.5 rounded-sm">RuPay</span>
                    </div>

                    {/* Footer links */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="flex-1 h-px bg-[#e2d9c8]" />
                        <div className="flex gap-4">
                            <a href="#" className="text-xs text-[#7a6a55] hover:COLOR_TEXT_RED transition-colors tracking-wide underline underline-offset-2 decoration-[#d8cdb8]">
                                Cancellation Policy
                            </a>
                            <span className="text-[#d8cdb8]">·</span>
                            <a href="#" className="text-xs text-[#7a6a55] hover:COLOR_TEXT_RED transition-colors tracking-wide underline underline-offset-2 decoration-[#d8cdb8]">
                                Terms & Conditions
                            </a>
                        </div>
                        <div className="flex-1 h-px bg-[#e2d9c8]" />
                    </div>
                </div>


            </div>

        </div>

        </>
    );
}


/* ── Sub-components ───────────────────────────────────────────── */

function MetaRow({ label, value }) {
    return (
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 COLOR_TEXT_CREAM">
            <span className="text-xs sm:text-sm COLOR_TEXT_CREAM tracking-widest uppercase shrink-0 Font_Q">
                {label}:
            </span>
            <span
                className="text-sm sm:text-base COLOR_TEXT_CREAM Font_YV"
                
            >
                {value}
            </span>
        </div>
    );
}

function ContactRow({ icon, text }) {
    return (
        <div className="flex items-center gap-3 Font_YV">
            <div className="w-7 h-7 rounded-full border border-[#e2d9c8] bg-[#faf7f2] COLOR_TEXT_CREAM Font_YV flex items-center justify-center shrink-0">
                {icon === "email" ? (
                    <svg className="w-3.5 h-3.5 COLOR_TEXT_RED" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" />
                        <path d="M2 7l10 7 10-7" strokeWidth="1.5" />
                    </svg>
                ) : (
                    <svg className="w-3.5 h-3.5 COLOR_TEXT_RED" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeWidth="1.5" />
                    </svg>
                )}
            </div>
            <span className="text-xs sm:text-sm  tracking-wide COLOR_TEXT_CREAM">{text}</span>
        </div>
    );
}