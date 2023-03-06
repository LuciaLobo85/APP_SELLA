import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
   
  },

  {
    name: 'ALMACÉN',
    url: '/theme',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Zonas',
        url: '/theme/colors'
      },
      {
        name: 'Pasillos',
        url: '/theme/typography'
   
      },
      {
        name: 'Estanterias',
        url: '/theme/estanterias',
       
        
      },
    
      {
        name: 'Ubicaciones',
        url: '/theme/ubicaciones',
       
        
      },

     
     
    ]
  },

  {
    name: 'USUARIOS',
    url: '/usuarios/usuariosList',
    iconComponent: { name: 'cil-user' },
  },

 
  {
    name: 'ALTAS',
    url: '/altas',
    iconComponent: { name: 'cil-notes' },
    children: [
      
      {
        name: 'Vehículos',
        url: '/altas/vehiculos'
      },

      {
        name: 'Recambios',
        url: '/altas/recambios'
      },
    
    ]
  },

  {
    name: 'REGULARIZACIÓN',
    url: '/regularizacion',
    iconComponent: { name: 'cil-pencil'},
    children: [
      
      {
        name: 'Vehículos',
        url: '/regularizacion/vehiculos'
      },

      {
        name: 'Recambios',
        url: '/regularizacion/recambios'
      },
    
    ]
  },

  {
    name: 'BÚSQUEDAS',
    url: '/busquedas',
    iconComponent: { name: 'cil-magnifying-glass'},
    children: [
      
      {
        name: 'Vehículos',
        url: '/busquedas/vehiculos'
      },

      {
        name: 'Recambios',
        url: '/busquedas/recambios'
      },
    
    ]
  },

  {
    name: 'VENTA ONLINE',
    url: '',
    iconComponent: { name: 'cil-basket' },
  },
  /*{
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  }, 
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },

  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  }, */
];
