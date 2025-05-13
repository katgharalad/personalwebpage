
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				glass: {
					DEFAULT: 'rgba(23, 25, 35, 0.6)',
					light: 'rgba(255, 255, 255, 0.05)',
					dark: 'rgba(15, 15, 20, 0.8)',
				},
				'neon-pink': '#FF10F0',
				'neon-yellow': '#FFFF00',
				'neon-blue': '#00FFFF',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						textShadow: '0 0 8px rgba(255, 255, 255, 0.5)' 
					},
					'50%': { 
						textShadow: '0 0 12px rgba(255, 255, 255, 0.8)'
					}
				},
				'neon-pulse-pink': {
					'0%, 100%': {
						textShadow: '0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0'
					},
					'50%': {
						textShadow: '0 0 5px #FF10F0, 0 0 15px #FF10F0, 0 0 25px #FF10F0'
					}
				},
				'neon-pulse-yellow': {
					'0%, 100%': {
						textShadow: '0 0 10px #FFFF00, 0 0 20px #FFFF00, 0 0 30px #FFFF00'
					},
					'50%': {
						textShadow: '0 0 5px #FFFF00, 0 0 15px #FFFF00, 0 0 25px #FFFF00'
					}
				},
				'neon-pulse-blue': {
					'0%, 100%': {
						textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF'
					},
					'50%': {
						textShadow: '0 0 5px #00FFFF, 0 0 15px #00FFFF, 0 0 25px #00FFFF'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'neon-pulse-pink': 'neon-pulse-pink 2s ease-in-out infinite',
				'neon-pulse-yellow': 'neon-pulse-yellow 2s ease-in-out infinite',
				'neon-pulse-blue': 'neon-pulse-blue 2s ease-in-out infinite'
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				digital: ['Space Mono', 'monospace']
			},
			backgroundImage: {
				'gradient-dark': 'linear-gradient(135deg, #121212 0%, #1A1F2C 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
