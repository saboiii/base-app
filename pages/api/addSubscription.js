import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export default async function handle(req, res) {
    const { method } = req;

    if (method === 'POST') {
        const { email } = req.body;
        console.log("email:", email);

        try {
            const listMembers = await mailchimp.lists.getListMembersInfo(process.env.MAILCHIMP_AUDIENCE_ID, { count:100, fields: ['members.email_address'] });
            const existingMember = listMembers.members.find(member => member.email_address === email);
            if (existingMember) {
                return res.status(400).json({ status: 400, message: 'We have already added you to our mailing list!' });
            } else{
                const res = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
                    email_address: email,
                    status: 'subscribed',
                });
                return res.status(200).json({ status: 200, message: 'We have added you to our mailing list!' });
            }
        } catch (error) {
            // console.error('Error adding email to Mailchimp:', error);
        }
        res.end();
        
    }

    if (method === 'GET') {
    }
}
