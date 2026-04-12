import { Resend } from 'resend';
import { QuoteFormData, ContactFormData } from './validators';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendQuoteNotification(data: QuoteFormData): Promise<void> {
  if (!resend) {
    console.warn('RESEND_API_KEY not configured, skipping email notification');
    return;
  }

  try {
    const { fullName, email, phone, service } = data;

    await resend.emails.send({
      from: 'Defcon4 Alliance <noreply@defcon4alliance.com>',
      to: process.env.INTERNAL_EMAIL || 'leads@defcon4alliance.com',
      subject: 'New Quote Request — Defcon4 Alliance',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CC0000;">New Quote Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error - email failure shouldn't break the lead capture
  }
}

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  if (!resend) {
    console.warn('RESEND_API_KEY not configured, skipping email notification');
    return;
  }

  try {
    const { name, email, subject, message } = data;

    await resend.emails.send({
      from: 'Defcon4 Alliance <noreply@defcon4alliance.com>',
      to: process.env.INTERNAL_EMAIL || 'contact@defcon4alliance.com',
      subject: `New Contact Message: ${subject} — Defcon4 Alliance`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #CC0000;">New Contact Message</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0; border-left: 4px solid #CC0000;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending contact email notification:', error);
    // Don't throw error - email failure shouldn't break the contact form
  }
}