"use client";

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface ClapButtonProps {
  slug: string;
}

export default function ClapButton({ slug }: ClapButtonProps) {
  const [claps, setClaps] = useState(0);
  const [hasClapped, setHasClapped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Fetch initial clap count
  useEffect(() => {
    const fetchClaps = async () => {
      try {
        const response = await fetch(`/api/articles/clap?slug=${encodeURIComponent(slug)}`);
        if (response.ok) {
          const data = await response.json();
          setClaps(data.claps);
        }
      } catch (error) {
        console.error('Error fetching claps:', error);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchClaps();
  }, [slug]);

  // Check if user has already clapped (using localStorage)
  useEffect(() => {
    const clappedArticles = JSON.parse(localStorage.getItem('clappedArticles') || '[]');
    setHasClapped(clappedArticles.includes(slug));
  }, [slug]);

  const handleClap = async () => {
    if (hasClapped || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/articles/clap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      if (response.ok) {
        const data = await response.json();
        setClaps(data.claps);
        setHasClapped(true);

        // Store in localStorage
        const clappedArticles = JSON.parse(localStorage.getItem('clappedArticles') || '[]');
        clappedArticles.push(slug);
        localStorage.setItem('clappedArticles', JSON.stringify(clappedArticles));
      }
    } catch (error) {
      console.error('Error clapping article:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isInitialLoading) {
    return (
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground cursor-wait">
        <Heart className="w-4 h-4 animate-pulse" />
        <span className="text-sm font-medium">Loading...</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClap}
      disabled={hasClapped || isLoading}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
        hasClapped
          ? 'bg-primary/10 border-primary/30 text-primary cursor-default'
          : 'border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary'
      } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
    >
      <Heart
        className={`w-4 h-4 ${hasClapped ? 'fill-current' : ''} ${
          isLoading ? 'animate-pulse' : ''
        }`}
      />
      <span className="text-sm font-medium">
        {hasClapped ? 'Clapped' : 'Clap'} ({claps})
      </span>
    </button>
  );
}