module.exports = {
  purge: [
    './pages/**/*.js', './components/**/*.js',
    './pages/**/*.tsx', './components/**/*.tsx'
  ],

  darkMode: false,

  theme: {
    colors: {
      accent: '#a3195b',
      bse: '#ffffff',
      facebook: '#1977f3',
      inactive: '#f5f5f5',
      neutral: '#00a19a',
      primary: '#1c2d3d',
      secondary: '#c0c0c0',
      soft: '#ebdae2'
    },

    backgroundColor: (theme) => ({
      ...theme('colors')
    }),

    borderColor: (theme) => ({
      ...theme('colors')
    }),

    textColor: (theme) => ({
      ...theme('colors')
    }),

    fontFamily: {
      'display': ['Playfair Display', 'display'],
      'sans': ['Source Sans Pro', 'sans-serif']
    },

    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },

    rotate: {
      '33': '33deg',
      '34': '34deg',
      '35': '35deg'
    },

    extend: {
      animation: {
        compressVertically: 'compressVertically 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        expandVertically: 'expandVertically 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        fadeIn: 'fadeIn 0.5s ease-in-out both',
        fadeOut: 'fadeOut 0.5s ease-in-out both',
        flipHorizontalBottom: 'flipHorizontalBottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        flipHorizontalBottomBck: 'flipHorizontalBottomBck 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        heartbeat: 'heartbeat 1s ease-in-out infinite both',
        rotateCenter: 'rotateCenter 1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both',
        scaleDownCenter: 'scaleDownCenter 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        scaleInCenter: 'scaleInCenter 0.15s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        scaleUpCenter: 'scaleUpCenter 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        slideInBottom: 'slideInBottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideInLeft: 'slideInLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideInRight: 'slideInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideInTop: 'slideInTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        wiggle: 'wiggle 0.6s both',
        wobbleHorBottom: 'wobbleHorBottom 0.6s both'
      },
      keyframes: {
        compressVertically: {
          '0%': {
            heigth: 'auto',
            opacity: 1
          },
          '100%': {
            heigth: '0',
            opacity: 0
          }
        },
        expandVertically: {
          '0%': {
            heigth: 0,
            opacity: 0
          },
          '100%': {
            heigth: 'auto',
            opacity: 1
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        flipHorizontalBottom: {
          '0%': {
            transform: 'rotateX(0)'
          },
          '100%': {
            transform: 'rotateX(-180deg)'
          }
        },
        flipHorizontalBottomBck: {
          '0%': {
            transform: 'rotateX(-180deg)'
          },
          '100%': {
            transform: 'rotateX(0)'
          }
        },
        heartbeat: {
          'from': {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out'
          },
          '10%': {
            transform: 'scale(0.91)',
            animationTimingFunction: 'ease-in'
          },
          '17%': {
            transform: 'scale(0.98)',
            animationTimingFunction: 'ease-out'
          },
          '33%': {
            transform: 'scale(0.87)',
            animationTimingFunction: 'ease-in'
          },
          '45%': {
            transform: 'scale(1)',
            animationTimingFunction: 'ease-out'
          }
        },
        rotateCenter: {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        scaleDownCenter: {
          '0%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        scaleInCenter: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        scaleUpCenter: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.1)'
          }
        },
        slideInBottom: {
          '0%': {
            transform: 'translateY(100vh)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(-1000px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        slideInTop: {
          '0%': {
            transform: 'translateY(-1000px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wobbleHorBottom: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%'
          },
          '15%': {
            transform: 'translateX(-30px) rotate(-6deg)'
          },
          '30%': {
            transform: 'translateX(15px) rotate(6deg)'
          },
          '45%': {
            transform: 'translateX(-15px) rotate(-3.6deg)'
          },
          '60%': {
            transform: 'translateX(9px) rotate(2.4deg)'
          },
          '75%': {
            transform: 'translateX(-6px) rotate(-1.2deg)'
          }
        }
      }
    }
  },

  variants: {
    extend: {}
  },

  plugins: []
}
