
// TODO: Paste your real Stripe Payment Link URL here
// Example format: https://buy.stripe.com/1234567890abcdef
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/YOUR_REAL_LINK_HERE";

export function startStripeCheckout() {
  // Check if the link is the placeholder or empty
  if (!STRIPE_PAYMENT_LINK || STRIPE_PAYMENT_LINK.includes("YOUR_REAL_LINK_HERE")) {
    console.warn("Stripe Payment Link is not configured correctly.");
    alert("Payment system is in demo mode. Configure STRIPE_PAYMENT_LINK in utils/payment.ts to go live.");
    return;
  }
  
  // Redirect the user to the secure Stripe checkout page
  window.location.href = STRIPE_PAYMENT_LINK;
}
