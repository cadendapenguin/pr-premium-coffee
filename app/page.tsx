"use client";
import { useState } from "react";
const features = [
  {
    title: "100% Arabica",
    text: "Premium whole bean coffee made from 100% Arabica beans.",
  },
  {
    title: "From Adjuntas",
    text: "Coffee grown in the mountains of Puerto Rico.",
  },
  {
    title: "Small Batch",
    text: "Carefully packaged to preserve the flavor and quality.",
  },
  {
    title: "Ships Across the U.S.",
    text: "Fresh coffee delivered directly to your door.",
  },
];

export default function Home() {
const [cartCount, setCartCount] = useState(0);
const [cartOpen, setCartOpen] = useState(false);
const [addedToCart, setAddedToCart] = useState(false);
const [showNotification, setShowNotification] = useState(false);
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#241b15]">
      {/* Navigation */}
<nav className="sticky top-0 z-40 border-b border-[#d8cbbb] bg-[#f6f1e8]/95 backdrop-blur">        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight">
              PR Premium Coffee
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-[#765c49]">
              Puerto Rico
            </p>
          </div>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-[#765c49]">
              Home
            </a>
            <a href="#shop" className="hover:text-[#765c49]">
              Shop
            </a>
            <a href="#subscribe" className="hover:text-[#765c49]">
              Subscribe
            </a>
            <a href="#story" className="hover:text-[#765c49]">
              Our Story
            </a>
            <a href="#contact" className="hover:text-[#765c49]">
              Contact
            </a>
          </div>

<button
  onClick={() => setCartOpen(true)}
  className="rounded-full border border-[#3d2c21] px-5 py-2 text-sm font-semibold hover:bg-[#3d2c21] hover:text-white"
>
  Cart ({cartCount})
</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#3d2c21] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b98c]">
              Premium Puerto Rican Coffee
            </p>

            <h2 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
              Taste
              <br />
              Puerto Rico.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#e8ddd2]">
              Premium coffee from the mountains of Adjuntas, Puerto Rico.
              Rich, smooth, and made for people who take their coffee
              seriously.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#d9b98c] px-7 py-3.5 font-semibold text-[#241b15] transition hover:bg-[#ecd0a8]"
              >
                Shop Coffee
              </a>

              <a
                href="#subscribe"
                className="rounded-full border border-white/40 px-7 py-3.5 font-semibold transition hover:bg-white hover:text-[#3d2c21]"
              >
                Subscribe & Save
              </a>
            </div>
          </div>

          <div className="flex justify-center">
<div className="relative flex h-[430px] w-[320px] items-center justify-center rounded-[2rem] bg-[#5a4030] shadow-2xl">
  <img
    src="/coffee-bag.png"
    alt="Café de Puta Madre coffee from Adjuntas, Puerto Rico"
    className="max-h-[390px] w-auto object-contain drop-shadow-2xl"
  />
</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-[#d8cbbb] bg-[#efe7dc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-serif text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6d5a4c]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b674b]">
            The Coffee
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            Your new favorite morning ritual.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#6d5a4c]">
            Our signature Puerto Rican coffee is made with 100% Arabica beans
            from Adjuntas. Order a bag for yourself or keep your supply
            stocked with a subscription.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 rounded-[2rem] bg-[#e7ddcf] p-8 md:grid-cols-2 md:p-14">
          <div className="flex min-h-[450px] items-center justify-center rounded-2xl bg-[#d8cbbb] p-8">
  <img
    src="/coffee-bag.png"
    alt="Café de Puta Madre Puerto Rican coffee"
    className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
  />
</div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b674b]">
              Signature Coffee
            </p>

            <h3 className="mt-3 font-serif text-4xl font-bold">
              Café de Puta Madre
            </h3>

            <p className="mt-5 leading-7 text-[#6d5a4c]">
              A premium whole bean coffee from Adjuntas, Puerto Rico. Perfect
              for brewing at home and sharing with friends and family.
            </p>

            <div className="mt-8 flex items-end gap-3">
              <span className="font-serif text-4xl font-bold">$25.99</span>
              <span className="pb-1 text-sm text-[#765c49]">per 9 oz bag</span>
            </div>

            <p className="mt-2 text-sm text-[#765c49]">
              Shipping calculated separately at checkout.
            </p>

         <button
  onClick={() => {
    setCartCount((count) => count + 1);
    setAddedToCart(true);
    setShowNotification(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);

    setTimeout(() => {
      setShowNotification(false);
    }, 8000);
  }}
  className="mt-8 w-full rounded-full bg-[#3d2c21] px-7 py-4 font-semibold text-white transition hover:bg-[#5a4030]"
>
  {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
</button>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section id="subscribe" className="bg-[#3d2c21] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9b98c]">
              Never Run Out
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
              Make great coffee a habit.
            </h2>

            <p className="mt-5 leading-7 text-[#d8cbbb]">
              Subscribe and have your coffee delivered on the schedule that
              works best for you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Every 2 Weeks", "For serious coffee drinkers"],
              ["Every 4 Weeks", "Most Popular"],
              ["Every 8 Weeks", "For occasional coffee drinkers"],
            ].map(([title, subtitle], index) => (
              <div
                key={title}
                className={`rounded-2xl border p-8 ${
                  index === 1
                    ? "border-[#d9b98c] bg-[#5a4030]"
                    : "border-white/20"
                }`}
              >
                {index === 1 && (
                  <span className="rounded-full bg-[#d9b98c] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#241b15]">
                    Most Popular
                  </span>
                )}

                <h3 className="mt-4 font-serif text-2xl font-bold">{title}</h3>

                <p className="mt-3 text-sm text-[#d8cbbb]">{subtitle}</p>

                <p className="mt-6 text-3xl font-bold">
                  $23.99
                  <span className="text-sm font-normal text-[#d8cbbb]">
                    {" "}
                    / bag
                  </span>
                </p>

<button
  disabled
  className="mt-8 w-full cursor-not-allowed rounded-full bg-[#8b7768] px-7 py-4 font-semibold text-white opacity-80"
>
  Subscriptions Coming Soon
</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b674b]">
          Our Story
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
          From the mountains of Puerto Rico to your kitchen.
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6d5a4c]">
          PR Premium Coffee is about bringing the flavor and character of
          Puerto Rican coffee to coffee lovers across the United States.
          Starting with coffee from Adjuntas, we're building something simple:
          great coffee, delivered directly to you.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-[#d8cbbb] bg-[#efe7dc] px-6 py-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-xl font-bold">PR Premium Coffee</p>
            <p className="mt-1 text-sm text-[#765c49]">
              Premium coffee from Puerto Rico.
            </p>
          </div>

          <p className="text-sm text-[#765c49]">
            © 2026 PR Premium Coffee. All rights reserved.
          </p>
        </div>
      </footer>
{showNotification && (
  <div className="fixed right-6 top-24 z-[9999] rounded-2xl bg-black px-6 py-4 text-lg font-bold text-white shadow-2xl">
    Café de Puta Madre added to cart

    <button
      onClick={() => setCartOpen(true)}
      className="ml-4 underline"
    >
      View Cart
    </button>
  </div>
)}
       {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#f6f1e8] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#d8cbbb] pb-5">
              <h2 className="font-serif text-3xl font-bold">Your Cart</h2>

              <button
                onClick={() => setCartOpen(false)}
                className="text-2xl text-[#765c49] hover:text-[#241b15]"
              >
                ×
              </button>
            </div>

            {cartCount === 0 ? (
              <div className="flex h-[70%] items-center justify-center text-center">
                <div>
                  <p className="font-serif text-2xl font-bold">
                    Your cart is empty
                  </p>
                  <p className="mt-2 text-[#765c49]">
                    Add some Puerto Rican coffee to get started.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <div className="flex-1 py-8">
                  <div className="flex gap-4 rounded-2xl bg-[#e7ddcf] p-4">
                    <img
                      src="/coffee-bag.png"
                      alt="Café de Puta Madre coffee"
                      className="h-28 w-20 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold">
                        Café de Puta Madre
                      </h3>

                      <p className="mt-1 text-sm text-[#765c49]">
                        100% Arabica • 9 oz
                      </p>

                     <div className="mt-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <button
        onClick={() => setCartCount((count) => Math.max(0, count - 1))}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3d2c21] text-lg font-semibold hover:bg-[#3d2c21] hover:text-white"
      >
        −
      </button>

      <span className="min-w-[24px] text-center font-semibold">
        {cartCount}
      </span>

      <button
        onClick={() => setCartCount((count) => count + 1)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3d2c21] text-lg font-semibold hover:bg-[#3d2c21] hover:text-white"
      >
        +
      </button>
    </div>

    <span className="font-serif text-xl font-bold">
      ${(25.99 * cartCount).toFixed(2)}
    </span>
  </div>

  <button
    onClick={() => setCartCount(0)}
    className="mt-3 text-sm font-semibold text-[#765c49] underline hover:text-[#241b15]"
  >
    Remove
  </button>
</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#d8cbbb] py-6">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-bold">
                      ${(25.99 * cartCount).toFixed(2)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-[#765c49]">
                    Shipping calculated at checkout.
                  </p>

                  <button
                    onClick={() => alert("Checkout coming next!")}
                    className="mt-6 w-full rounded-full bg-[#3d2c21] px-7 py-4 font-semibold text-white transition hover:bg-[#5a4030]"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}