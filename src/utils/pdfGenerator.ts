import { jsPDF } from 'jspdf';
import { HERO_DATA, ABOUT_DATA, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data';

export function downloadProfessionalCV() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // A4 details: 210mm x 297mm
  const pageHeight = 297;
  const pageWidth = 210;
  const leftMargin = 15;
  const rightMargin = 15;
  const contentWidth = pageWidth - leftMargin - rightMargin; // 180mm

  // Premium Colors (Timeless Luxury Navy & Slate)
  const primaryColor = '#0f172a'; // Deep slate
  const accentColor = '#0284c7';  // Sky blue
  const bodyColor = '#374151';    // Slate 700
  const lightGray = '#f3f4f6';    // Light background for chips/accents
  const borderGray = '#e5e7eb';   // Light border line

  // Helpers for text styling
  const setHeadingStyle = (size: number, color: string = primaryColor) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(color);
  };

  const setBodyStyle = (size: number = 9.5, color: string = bodyColor, isBold: boolean = false) => {
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(color);
  };

  // --- 1. HEADER BANNER SECTION (Full Width) ---
  let y = 18;

  // Name
  setHeadingStyle(24, primaryColor);
  doc.text(HERO_DATA.name, leftMargin, y);
  
  // Headline / Title
  y += 7;
  setHeadingStyle(11, accentColor);
  doc.text(HERO_DATA.headline.toUpperCase(), leftMargin, y);

  // Decorative Accent bar (Left aligned)
  y += 4;
  doc.setFillColor(accentColor);
  doc.rect(leftMargin, y, 25, 1.5, 'F');

  // Contact details as a nice horizontal row in header
  y += 6;
  setBodyStyle(8.5, bodyColor);
  const contactText = `Email: hasty0joel@gmail.com   |   Phone: +256 760 672 702   |   GitHub: github.com/joel-atamba`;
  doc.text(contactText, leftMargin, y);

  // Thick elegant dividing line between Header and Columns
  y += 5;
  doc.setDrawColor('#cbd5e1');
  doc.setLineWidth(0.4);
  doc.line(leftMargin, y, pageWidth - rightMargin, y);

  // --- COLUMNS SYSTEM ---
  // Column Y tracks
  const columnStartY = y + 8;
  let leftY = columnStartY;
  let rightY = columnStartY;

  // Width definitions
  const leftColWidth = 54;
  const rightColWidth = 116;
  const colGap = 10;
  
  const leftColX = leftMargin; // 15
  const rightColX = leftColX + leftColWidth + colGap; // 79

  // Helper to draw clean section header with vertical accent line
  const drawSectionHeader = (title: string, x: number, currentY: number, colWidth: number) => {
    // Vertical tag
    doc.setFillColor(accentColor);
    doc.rect(x, currentY - 3.5, 2.5, 4.5, 'F');

    // Text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor);
    doc.text(title.toUpperCase(), x + 4, currentY);

    // Bottom horizontal rule
    doc.setDrawColor('#e2e8f0');
    doc.setLineWidth(0.2);
    doc.line(x, currentY + 2, x + colWidth, currentY + 2);

    return currentY + 7;
  };

  // ==================== LEFT COLUMN ====================
  
  // Profile Stats
  leftY = drawSectionHeader('At a Glance', leftColX, leftY, leftColWidth);
  ABOUT_DATA.stats.forEach(stat => {
    setBodyStyle(9, primaryColor, true);
    doc.text(`${stat.value}${stat.suffix}`, leftColX, leftY);
    
    setBodyStyle(8, bodyColor);
    doc.text(stat.label, leftColX + 10, leftY);
    leftY += 5;
  });
  leftY += 3;

  // Education Section
  leftY = drawSectionHeader('Education', leftColX, leftY, leftColWidth);
  setBodyStyle(9, primaryColor, true);
  doc.text('A-Level Student', leftColX, leftY);
  leftY += 4.5;
  
  setBodyStyle(8.5, bodyColor);
  const schoolLines = doc.splitTextToSize('Standard High School Zzana (Uganda)', leftColWidth);
  doc.text(schoolLines, leftColX, leftY);
  leftY += (schoolLines.length * 4) + 1;

  setBodyStyle(8, bodyColor, false);
  doc.setFont('helvetica', 'italic');
  doc.text('2024 - Present', leftColX, leftY);
  leftY += 4;
  
  setBodyStyle(8, bodyColor, false);
  const subjLines = doc.splitTextToSize('Focus: Mathematics, Physics, Economics & Computer Science', leftColWidth);
  doc.text(subjLines, leftColX, leftY);
  leftY += (subjLines.length * 4) + 4;

  // Technical Skills Category
  leftY = drawSectionHeader('Core Expertise', leftColX, leftY, leftColWidth);
  SKILLS_DATA.forEach(cat => {
    setBodyStyle(8.5, primaryColor, true);
    doc.text(cat.title, leftColX, leftY);
    leftY += 4;

    setBodyStyle(8, bodyColor);
    const skillsList = cat.skills.join(', ');
    const skillsLines = doc.splitTextToSize(skillsList, leftColWidth);
    doc.text(skillsLines, leftColX, leftY);
    leftY += (skillsLines.length * 4) + 2;
  });
  leftY += 1;

  // Certifications
  leftY = drawSectionHeader('Certifications', leftColX, leftY, leftColWidth);
  CERTIFICATIONS_DATA.forEach(cert => {
    setBodyStyle(8.5, primaryColor, true);
    doc.text(cert.name, leftColX, leftY);
    leftY += 4;

    setBodyStyle(8, bodyColor);
    doc.text(`${cert.issuer} | ${cert.date}`, leftColX, leftY);
    leftY += 5;
  });


  // ==================== RIGHT COLUMN ====================
  
  // Profile Summary
  rightY = drawSectionHeader('Professional Summary', rightColX, rightY, rightColWidth);
  setBodyStyle(9, bodyColor);
  const bioLines = doc.splitTextToSize(ABOUT_DATA.bio, rightColWidth);
  doc.text(bioLines, rightColX, rightY);
  rightY += (bioLines.length * 4.5) + 5;

  // Leadership & Experience
  rightY = drawSectionHeader('Leadership & Experience', rightColX, rightY, rightColWidth);
  EXPERIENCE_DATA.forEach(exp => {
    // Role Title & Period
    setBodyStyle(10, primaryColor, true);
    doc.text(exp.role, rightColX, rightY);
    
    // Period right aligned
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text(exp.period, rightColX + rightColWidth, rightY, { align: 'right' });
    rightY += 4;

    // Company Name
    setBodyStyle(9, accentColor, true);
    doc.text(exp.company, rightColX, rightY);
    rightY += 5;

    // Bullet points
    exp.description.forEach(bullet => {
      // Draw bullet circle
      doc.setFillColor(accentColor);
      doc.circle(rightColX + 1.5, rightY - 1, 0.6, 'F');

      setBodyStyle(8.5, bodyColor);
      const bulletLines = doc.splitTextToSize(bullet, rightColWidth - 5);
      doc.text(bulletLines, rightColX + 4, rightY);
      rightY += (bulletLines.length * 4) + 1.5;
    });
  });
  rightY += 3;

  // Core Projects Section
  rightY = drawSectionHeader('Key Technical Projects', rightColX, rightY, rightColWidth);
  
  // Showcase top 4 major projects to fit beautifully on the page without overflow
  const featuredProjects = PROJECTS_DATA.slice(0, 4);
  
  featuredProjects.forEach(project => {
    // Project Title
    setBodyStyle(9.5, primaryColor, true);
    doc.text(project.name, rightColX, rightY);

    // Tags list inline right-aligned
    setBodyStyle(7.5, accentColor);
    const tagsText = project.tags.slice(0, 4).join(' • ');
    doc.text(tagsText, rightColX + rightColWidth, rightY, { align: 'right' });
    rightY += 4;

    // Project Description
    setBodyStyle(8.5, bodyColor);
    const descLines = doc.splitTextToSize(project.description, rightColWidth);
    doc.text(descLines, rightColX, rightY);
    rightY += (descLines.length * 4) + 1.5;

    // Quick Highlights
    if (project.highlights && project.highlights.length > 0) {
      setBodyStyle(8, bodyColor);
      const highlightText = `Key Aspect: ${project.highlights[0]}`;
      const highlightLines = doc.splitTextToSize(highlightText, rightColWidth - 4);
      
      // Draw sub-bullet line
      doc.setDrawColor('#cbd5e1');
      doc.setLineWidth(0.2);
      doc.line(rightColX + 1, rightY - 2.5, rightColX + 1, rightY + (highlightLines.length * 3.5) - 3.5);
      
      doc.text(highlightLines, rightColX + 3.5, rightY);
      rightY += (highlightLines.length * 3.8) + 1;
    }
    rightY += 1.5;
  });

  // Footer stamp at the bottom center of page
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor('#9ca3af');
  const footerText = `Generated dynamically via Atamba Joel's Live Portfolio • Kampala, Uganda`;
  doc.text(footerText, pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Save Document
  doc.save('Atamba_Joel_CV.pdf');
}
