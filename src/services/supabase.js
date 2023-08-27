import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ltmpstvcevfcoahibizw.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXBzdHZjZXZmY29haGliaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzY5NDMsImV4cCI6MjAwODY1Mjk0M30.EGgBFJiA63FBMKNO8-MWOVynNg05rgES5s18K7Jh55I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
