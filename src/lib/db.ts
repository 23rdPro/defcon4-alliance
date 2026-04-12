import { promises as fs } from 'fs';
import path from 'path';
import { QuoteFormData } from './validators';

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  createdAt: Date;
}

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

export async function saveLead(data: QuoteFormData): Promise<Lead> {
  const lead: Lead = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: new Date(),
  };

  try {
    // Ensure data directory exists
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });

    // Read existing leads
    let leads: Lead[] = [];
    try {
      const fileContent = await fs.readFile(LEADS_FILE, 'utf-8');
      leads = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
    }

    // Add new lead
    leads.push(lead);

    // Write back to file
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    return lead;
  } catch (error) {
    console.error('Error saving lead:', error);
    throw new Error('Failed to save lead data');
  }
}