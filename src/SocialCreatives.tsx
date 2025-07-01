import { ArrowLeft, Download, Image as ImageIcon, Palette, RefreshCw, Type } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Available background images
const backgroundImages = [
  { id: 'cafe-coworking', src: './images/yolk-workspace/cafe-style-coworking.webp', name: 'Cafe Style Coworking' },
  { id: 'collaborative', src: './images/yolk-workspace/collaborative-workspace.webp', name: 'Collaborative Workspace' },
  { id: 'dedicated-desks', src: './images/yolk-workspace/dedicated-desks.webp', name: 'Dedicated Desks' },
  { id: 'meeting-room', src: './images/yolk-workspace/meeting-room.webp', name: 'Meeting Room' },
  { id: 'flexible-cafe', src: './images/yolk-workspace/flexible-cafe-coworking.webp', name: 'Flexible Cafe' },
  { id: 'courtyard-events', src: './images/yolk-workspace/courtyard-events.webp', name: 'Courtyard Events' },
  { id: 'community-1', src: './images/yolk-workspace/community-event-1.jpg', name: 'Community Event 1' },
  { id: 'community-2', src: './images/yolk-workspace/community-event-2.jpg', name: 'Community Event 2' },
  { id: 'community-3', src: './images/yolk-workspace/community-event-3.jpg', name: 'Community Event 3' },
  { id: 'yolk-cafe', src: './images/yolk-workspace/yolk-cafe.webp', name: 'Yolk Cafe' },
];

// Preset text templates
const textTemplates = [
  {
    id: 'challenge-program',
    title: 'AI Challenge Program',
    subtitle: 'Join the first cohort of Yolk Lab',
    description: 'August - October 2025 • Kraków',
    cta: 'Apply Now'
  },
  {
    id: 'grown-not-born',
    title: 'Grown, Not Born',
    subtitle: 'Where AI startups accelerate',
    description: '12-week intensive program',
    cta: 'Learn More'
  },
  {
    id: 'community',
    title: 'Join Our Community',
    subtitle: '15 Selected Founders',
    description: 'AI-powered startup accelerator',
    cta: 'Apply Today'
  },
  {
    id: 'custom',
    title: 'Custom Text',
    subtitle: 'Your subtitle here',
    description: 'Your description here',
    cta: 'Your CTA'
  }
];

interface CreativeConfig {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  titleColor: string;
  subtitleColor: string;
  descriptionColor: string;
  ctaColor: string;
  ctaBgColor: string;
  titleSize: 'sm' | 'md' | 'lg' | 'xl';
  format: 'square' | 'story' | 'landscape';
  blurIntensity: number;
}

export default function SocialCreatives() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [config, setConfig] = useState<CreativeConfig>({
    backgroundImage: backgroundImages[0].src,
    title: textTemplates[0].title,
    subtitle: textTemplates[0].subtitle,
    description: textTemplates[0].description,
    cta: textTemplates[0].cta,
    titleColor: '#ffffff',
    subtitleColor: '#F6D55C',
    descriptionColor: '#e5e7eb',
    ctaColor: '#1a1a1a',
    ctaBgColor: '#F6D55C',
    titleSize: 'xl',
    format: 'square',
    blurIntensity: 8
  });

  const formatDimensions = {
    square: { width: 1080, height: 1080 },
    story: { width: 1080, height: 1920 },
    landscape: { width: 1200, height: 630 }
  };

  const titleSizes = {
    sm: { size: 48, lineHeight: 1.2 },
    md: { size: 64, lineHeight: 1.2 },
    lg: { size: 80, lineHeight: 1.1 },
    xl: { size: 140, lineHeight: 1.1 }
  };

  const generateCreative = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dimensions = formatDimensions[config.format];
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Load and draw blurred background
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = async () => {
      // Calculate scaling to maintain aspect ratio (like object-fit: cover)
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgAspect > canvasAspect) {
        // Image is wider than canvas - fit to height, center horizontally
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        // Image is taller than canvas - fit to width, center vertically
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      // Draw background image with proper aspect ratio
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      // Apply blur effect
      ctx.filter = `blur(${config.blurIntensity}px)`;
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';

      // Add dark overlay for text readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate positions
      const topMargin = canvas.height * 0.15;
      const logoY = topMargin + (canvas.height * 0.03); // Position logo much higher

      // Draw logo first
      await drawLogo(ctx, canvas.width, canvas.height, logoY);

      // Draw text content after logo
      drawText(ctx, canvas.width, canvas.height);
    };

    img.src = config.backgroundImage;
  };

  const drawLogo = async (ctx: CanvasRenderingContext2D, width: number, height: number, logoY: number) => {
    const logoSize = Math.min(width, height) * 0.08;

    // Position logo centered horizontally, at the specified Y position
    const x = (width - logoSize) / 2;
    const y = logoY;

    // Load and draw the actual logo PNG
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';

    return new Promise<void>((resolve) => {
      logoImg.onload = () => {
        // Add subtle shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        ctx.drawImage(logoImg, x, y, logoSize, logoSize);

        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        resolve();
      };
      logoImg.src = './logo.png';
    });
  };

  const drawText = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2;

    // Make all text sizes responsive to canvas size
    const scale = Math.min(width, height) / 1080;

    // Use the same calculations as in generateCreative for consistency
    const topMargin = height * 0.15;
    const logoSize = Math.min(width, height) * 0.08;
    const logoY = topMargin + (height * 0.03); // Same as in generateCreative
    const logoBottomY = logoY + logoSize;
    const logoMargin = height * 0.08; // Bigger gap between logo and title

    // Title starts after logo with margin
    const titleY = logoBottomY + logoMargin;

    // Title
    const titleFont = titleSizes[config.titleSize];
    const responsiveTitleSize = titleFont.size * scale;
    ctx.font = `bold ${responsiveTitleSize}px Arial`;
    ctx.fillStyle = config.titleColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const titleHeight = drawMultilineText(ctx, config.title, centerX, titleY, width * 0.9, responsiveTitleSize * titleFont.lineHeight);

    // Subtitle - position after title with smaller spacing
    const subtitleSize = Math.max(52 * scale, 42);
    ctx.font = `600 ${subtitleSize}px Arial`;
    ctx.fillStyle = config.subtitleColor;
    const subtitleY = titleY + titleHeight + (height * 0.04);
    ctx.fillText(config.subtitle, centerX, subtitleY);

    // Description - position after subtitle with bigger spacing
    const descriptionSize = Math.max(42 * scale, 36);
    ctx.font = `400 ${descriptionSize}px Arial`;
    ctx.fillStyle = config.descriptionColor;
    const descriptionY = subtitleY + (height * 0.06); // Increased spacing
    ctx.fillText(config.description, centerX, descriptionY);

    // CTA Button - position after description with smaller spacing
    const ctaY = descriptionY + (height * 0.08);
    const ctaWidth = Math.max(width * 0.35, 400);
    const ctaHeight = Math.max(height * 0.08, 80);
    const ctaX = centerX - ctaWidth / 2;

    // Button shadow for depth
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    // Button background
    ctx.fillStyle = config.ctaBgColor;
    ctx.roundRect(ctaX, ctaY - ctaHeight / 2, ctaWidth, ctaHeight, 16);
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Button text - make it bigger
    const ctaTextSize = Math.max(32 * scale, 28);
    ctx.font = `600 ${ctaTextSize}px Arial`;
    ctx.fillStyle = config.ctaColor;
    ctx.fillText(config.cta, centerX, ctaY);
  };

  const drawMultilineText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    let lineCount = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
        lineCount++;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
    lineCount++;

    // Return the total height of the text block
    return lineCount * lineHeight;
  };

  const downloadCreative = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `yolk-lab-creative-${config.format}-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const applyTemplate = (template: typeof textTemplates[0]) => {
    setConfig(prev => ({
      ...prev,
      title: template.title,
      subtitle: template.subtitle,
      description: template.description,
      cta: template.cta
    }));
  };

  // Generate creative when config changes
  React.useEffect(() => {
    generateCreative();
  }, [config, generateCreative]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Social Media Creative Generator</h1>
            </div>
            <button
              onClick={downloadCreative}
              className="inline-flex items-center px-6 py-3 rounded-md bg-yolk-teal text-white hover:bg-yolk-darker transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Creative
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Format Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <ImageIcon className="h-5 w-5 mr-2" />
                Format & Background
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                  <select
                    value={config.format}
                    onChange={(e) => setConfig(prev => ({ ...prev, format: e.target.value as CreativeConfig['format'] }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  >
                    <option value="square">Instagram Square (1080x1080)</option>
                    <option value="story">Instagram Story (1080x1920)</option>
                    <option value="landscape">LinkedIn Post (1200x630)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Image</label>
                  <div className="grid grid-cols-3 gap-2">
                    {backgroundImages.map((img) => (
                      <button
                        key={img.id}
                        onClick={() => setConfig(prev => ({ ...prev, backgroundImage: img.src }))}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${config.backgroundImage === img.src ? 'border-yolk-teal' : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <img src={img.src} alt={img.name} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blur Intensity: {config.blurIntensity}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={config.blurIntensity}
                    onChange={(e) => setConfig(prev => ({ ...prev, blurIntensity: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Text Templates */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Type className="h-5 w-5 mr-2" />
                Text Templates
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {textTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => applyTemplate(template)}
                    className="p-3 text-left border border-gray-200 rounded-lg hover:border-yolk-teal hover:bg-yolk-teal/5 transition-colors"
                  >
                    <div className="font-medium text-sm">{template.title}</div>
                    <div className="text-xs text-gray-500">{template.subtitle}</div>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={config.title}
                    onChange={(e) => setConfig(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={config.subtitle}
                    onChange={(e) => setConfig(prev => ({ ...prev, subtitle: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input
                    type="text"
                    value={config.description}
                    onChange={(e) => setConfig(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Call to Action</label>
                  <input
                    type="text"
                    value={config.cta}
                    onChange={(e) => setConfig(prev => ({ ...prev, cta: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  />
                </div>
              </div>
            </div>

            {/* Styling Options */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Styling Options
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title Size</label>
                  <select
                    value={config.titleSize}
                    onChange={(e) => setConfig(prev => ({ ...prev, titleSize: e.target.value as CreativeConfig['titleSize'] }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yolk-teal"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title Color</label>
                    <input
                      type="color"
                      value={config.titleColor}
                      onChange={(e) => setConfig(prev => ({ ...prev, titleColor: e.target.value }))}
                      className="w-full h-10 rounded-md border border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle Color</label>
                    <input
                      type="color"
                      value={config.subtitleColor}
                      onChange={(e) => setConfig(prev => ({ ...prev, subtitleColor: e.target.value }))}
                      className="w-full h-10 rounded-md border border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text Color</label>
                    <input
                      type="color"
                      value={config.ctaColor}
                      onChange={(e) => setConfig(prev => ({ ...prev, ctaColor: e.target.value }))}
                      className="w-full h-10 rounded-md border border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CTA Background</label>
                    <input
                      type="color"
                      value={config.ctaBgColor}
                      onChange={(e) => setConfig(prev => ({ ...prev, ctaBgColor: e.target.value }))}
                      className="w-full h-10 rounded-md border border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>

            <div className="flex justify-center">
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto border border-gray-200 rounded-lg shadow-lg"
                  style={{
                    maxHeight: '600px',
                    aspectRatio: config.format === 'square' ? '1/1' : config.format === 'story' ? '9/16' : '1200/630'
                  }}
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={generateCreative}
                className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 