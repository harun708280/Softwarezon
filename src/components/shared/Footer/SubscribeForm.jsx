import { subscribe } from "@/app/actions/subscribe";

export default async function SubscribeForm() {
  async function handleSubmit(formData) {
    "use server"; 
    const email = formData.get("email");
    const result = await subscribe(email);
    return result;
  }

  return (
    <form action={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe Now</button>
    </form>
  );
}
