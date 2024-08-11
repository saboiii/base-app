import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
})

export default async function POST(req) {
    const {email} = await req.json();
    console.log("email:", email);
}