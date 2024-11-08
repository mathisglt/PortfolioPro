type BubbleKey = 'portfolio' | 'we' | 'react' | 'js' | 'pokedex';

interface Bubble {
  name: string;
  subBubbles?: BubbleKey[];
  link?: string;
}
