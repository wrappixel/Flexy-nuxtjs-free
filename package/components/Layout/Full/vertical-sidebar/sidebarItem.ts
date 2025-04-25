import {
  AlertCircleIcon,
  ApertureIcon,
  AppsIcon,
  AppWindowIcon,
  BasketIcon,
  BorderAllIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderStyle2Icon,
  BorderTopIcon,
  BorderVerticalIcon,
  BoxAlignBottomIcon,
  BoxAlignLeftIcon,
  BoxIcon,
  BoxModelIcon,
  BrandTidalIcon,
  CalendarIcon,
  ChartArcsIcon,
  ChartAreaIcon,
  ChartCandleIcon,
  ChartDonut3Icon,
  ChartDotsIcon,
  ChartLineIcon,
  ChartRadarIcon,
  ColumnsIcon,
  CopyIcon,
  CurrencyDollarIcon,
  EditIcon,
  EyeTableIcon,
  FileCheckIcon,
  FileDotsIcon,
  FilesIcon,
  FileTextIcon,
  FilterIcon,
  HelpIcon,
  JumpRopeIcon,
  LayoutDashboardIcon,
  LayoutKanbanIcon,
  LoginIcon,
  MailIcon,
  Message2Icon,
  MoodHappyIcon,
  PageBreakIcon,
  PhotoAiIcon,
  CircleIcon,
  RotateIcon,
  RowInsertBottomIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShoppingCartIcon,
  SocialIcon,
  SortAscendingIcon,
  TicketIcon,
  TypographyIcon,
  UserCircleIcon,
  UserPlusIcon,
  UserShieldIcon,
  ZoomCodeIcon,
  AlertHexagonIcon,
  AlignBoxBottomLeftIcon,
  CardboardsIcon,
  TableIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipBgColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
      title: 'Dashboard',
      icon: LayoutDashboardIcon,
      to: '/',
      external: false
  },
  {
      title: 'Analytical',
      icon: ApertureIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/dashboards/analytical',
      chip: 'Pro',
      external: true
  },
  {
      title: 'eCommerce',
      icon: ShoppingCartIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/dashboards/ecommerce',
      external: true
  },
  {
      title: 'Front Pages',
      icon: AppWindowIcon,
      chip: 'Pro',
      to: '/',
      children: [
          {
              title: 'Homepage',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/homepage',
              external: true
          },
          {
              title: 'About Us',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/about-us',
              external: true
          },
          {
              title: 'Blog',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/blog/posts',
              external: true
          },
          {
              title: 'Blog Details',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
              external: true
          },
          {
              title: 'Contact Us',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/contact-us',
              external: true
          },
          {
              title: 'Portfolio',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/portfolio',
              external: true
          },
          {
              title: 'Pricing',
              chip: 'Pro',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/front-pages/pricing',
              external: true
          }
      ]
  },

  { header: 'utilities' },
  {
      title: 'Typography',
      icon: TypographyIcon,
      to: '/utilities/typography',
      external: false
  },
  {
      title: 'Shadow',
      icon: CopyIcon,
      to: '/utilities/shadow',
      external: false
  },

  { header: 'Apps' },
  {
      title: 'Contact',
      icon: BoxIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/contacts',
      chip: 'Pro',
      external: true
  },

  {
      title: 'Blog',
      icon: ChartDonut3Icon,
      chip: 'Pro',
      to: '/',
      children: [
          {
              title: 'Posts',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/blog/posts',
              external: true
          },
          {
              title: 'Detail',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
              external: true
          }
      ]
  },
  {
      title: 'E-Commerce',
      icon: BasketIcon,
      to: '/ecommerce/',
      chip: 'Pro',
      children: [
          {
              title: 'Shop',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/products',
              external: true
          },
          {
              title: 'Detail',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/product/detail/1',
              external: true
          },
          {
              title: 'List',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/productlist',
              external: true
          },
          {
              title: 'Checkout',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/checkout',
              external: true
          },
          {
              title: 'Add Product',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/addproduct',
              external: true
          },
          {
              title: 'Edit Product',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/ecommerce/editproduct',
              external: true
          }
      ]
  },
  {
      title: 'User Profile',
      icon: UserCircleIcon,
      chip: 'Pro',
      to: '/',
      children: [
          {
              title: 'Profile',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/user/profile',
              external: true
          },
          {
              title: 'Followers',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/user/profile/followers',
              external: true
          },
          {
              title: 'Friends',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/user/profile/friends',
              external: true
          },
          {
              title: 'Gallery',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/user/profile/gallery',
              external: true
          }
      ]
  },
  {
      title: 'Invoice',
      icon: FileCheckIcon,
      chip: 'Pro',
      to: '/',
      children: [
          {
              title: 'List',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/invoice',
              external: true
          },
          {
              title: 'Details',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/invoice/details/102',
              external: true
          },
          {
              title: 'Create',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/invoice/create',
              external: true
          },
          {
              title: 'Edit',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/apps/invoice/edit/102',
              external: true
          }
      ]
  },
  {
      title: 'Chats',
      icon: Message2Icon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/chats',
      external: true
  },

  {
      title: 'Notes',
      icon: FilesIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/notes',
      external: true
  },
  {
      title: 'Calendar',
      icon: CalendarIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/calendar',
      external: true
  },
  {
      title: 'Email',
      icon: MailIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/email',
      external: true
  },
  {
      title: 'Tickets',
      icon: TicketIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/tickets',
      external: true
  },
  {
      title: 'Kanban',
      icon: LayoutKanbanIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/apps/kanban',
      external: true
  },

  { header: 'Pages' },
  {
    title: "Sample Page",
    icon: ChartDonut3Icon,
    to: "/pages/sample-page",
  },
  {
      title: 'Pages',
      icon: ChartDonut3Icon,
      chip: 'Pro',
      to: '/',
      children: [
          {
              title: 'Pricing',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/pricing',
              external: true
          },
          {
              title: 'Account Setting',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/account-settings',
              external: true
          },
          {
              title: 'FAQ',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/faq',
              external: true
          },
          {
              title: 'Gallery Lightbox',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/gallery-lightbox',
              external: true
          },
          {
              title: 'Search Results',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/search-results',
              external: true
          },
          {
              title: 'Social Contacts',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/social-media-contacts',
              external: true
          },
          {
              title: 'Treeview',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/theme-pages/treeview',
              external: true
          }
      ]
  },


  { header: 'UI' },
  {
    title: "Alert",
    icon: AlertHexagonIcon,
    to: "/ui/alerts",
  },
  {
    title: "Button",
    icon: AlignBoxBottomLeftIcon,
    to: "/ui/buttons",
  },
  {
    title: "Cards",
    icon: CardboardsIcon,
    to: "/ui/cards",
  },
  {
    title: "Tables",
    icon: TableIcon,
    to: "/ui/tables",
  },
  {
      title: 'UI Components',
      icon: BoxIcon,
      chip: 'Pro',
      to: '#',
      children: [
          {
              title: 'Alert',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/alert'
          },
          {
              title: 'Accordion',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/accordion'
          },
          {
              title: 'Avatar',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/avatar'
          },
          {
              title: 'Chip',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/chip'
          },
          {
              title: 'Dialog',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/dialogs'
          },
          {
              title: 'List',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/list'
          },
          {
              title: 'Menus',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/menus'
          },
          {
              title: 'Rating',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/rating'
          },
          {
              title: 'Tabs',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/tabs'
          },
          {
              title: 'Tooltip',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/tooltip'
          },
          {
              title: 'Typography',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/ui-components/typography'
          }
      ]
  },



  { header: 'Forms' },
  {
      title: 'Form Elements',
      icon: AppsIcon,
      chip: 'Pro',
      to: '/components/',
      children: [
          {
              title: 'Autocomplete',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/autocomplete',
              external: true
          },
          {
              title: 'Combobox',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/combobox',
              external: true
          },
          {
              title: 'Button',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/button',
              external: true
          },
          {
              title: 'Checkbox',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/checkbox',
              external: true
          },
          {
              title: 'Custom Inputs',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/custominputs',
              external: true
          },
          {
              title: 'File Inputs',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/fileinputs',
              external: true
          },
          {
              title: 'Radio',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/radio',
              external: true
          },
          {
              title: 'Date Time',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/date-time',
              external: true
          },
          {
              title: 'Select',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/select',
              external: true
          },
          {
              title: 'Slider',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/slider',
              external: true
          },
          {
              title: 'Switch',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/switch',
              external: true
          },
          {
              title: 'Time Picker',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/timepicker',
              external: true
          },
          {
              title: 'Stepper',
              icon: CircleIcon,
              chip: 'Pro',
              to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-elements/stepper',
              external: true
          }
      ]
  },
  {
      title: 'Form Layout',
      icon: FileTextIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-layouts',
      external: true
  },
  {
      title: 'Form Horizontal',
      icon: BoxAlignBottomIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-horizontal',
      external: true
  },
  {
      title: 'Form Vertical',
      icon: BoxAlignLeftIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-vertical',
      external: true
  },
  {
      title: 'Form Custom',
      icon: FileDotsIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-custom',
      external: true
  },
  {
      title: 'Form Validation',
      icon: FilesIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/form-validation',
      external: true
  },
  {
      title: 'Editor',
      icon: EditIcon,
      chip: 'Pro',
      to: 'https://flexy-nuxtjs-main.netlify.app/forms/editor',
      external: true
  },

  { header: 'Tables' },
  {
      title: 'Basic Table',
      icon: BorderAllIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/basic',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Dark Table',
      icon: BorderHorizontalIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/dark',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Density Table',
      icon: BorderInnerIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/density',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Fixed Header Table',
      icon: BorderTopIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/fixed-header',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Height Table',
      icon: BorderVerticalIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/height',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Editable Table',
      icon: BorderStyle2Icon,
      to: 'https://flexy-nuxtjs-main.netlify.app/tables/editable',
      chip: 'Pro',
      external: true
  },
  { header: 'Data Tables' },
  {
      title: 'Data Tables',
      icon: AppsIcon,
      chip: 'Pro',
      to: '/components/',
      children: [
          {
              title: 'Basic Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/basic',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Header Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/headers',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Selection Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/Selectable',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Sorting Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/sorting',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Pagination Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/pagination',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Filtering Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/filtering',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Grouping Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/grouping',
              chip: 'Pro',
              external: true
          },
          {
              title: 'Table Slots',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/slots',
              chip: 'Pro',
              external: true
          },
          {
              title: 'CRUD Table',
              icon: CircleIcon,
              to: 'https://flexy-nuxtjs-main.netlify.app/datatables/crudtable',
              chip: 'Pro',
              external: true
          }
      ]
  },

  

  { header: 'Charts' },
  {
      title: 'Line',
      icon: ChartLineIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/line-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Gredient',
      icon: ChartArcsIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/gredient-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Area',
      icon: ChartAreaIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/area-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Candlestick',
      icon: ChartCandleIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/candlestick-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Column',
      icon: ChartDotsIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/column-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Doughnut & Pie',
      icon: ChartDonut3Icon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/doughnut-pie-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Radialbar & Radar',
      icon: ChartRadarIcon,
      to: 'https://flexy-nuxtjs-main.netlify.app/charts/radialbar-chart',
      chip: 'Pro',
      external: true
  },

  { header: 'auth' },
  {
      title: 'Login',
      icon: LoginIcon,
      to: '/auth/login',
      external: false
  },
  {
      title: 'Register',
      icon: UserPlusIcon,
      to: '/auth/register',
      external: false
  },
  {
      title: 'Auth Pages',
      icon: UserShieldIcon,
      chip: 'Pro',
      to: '#',
      children: [
          {
              title: 'Side Login',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/login'
          },
          {
              title: 'Boxed Login',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/login2'
          },

          {
              title: 'Side Register',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/register'
          },
          {
              title: 'Boxed Register',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/register2'
          },

          {
              title: 'Side Forgot Password',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/forgot-password'
          },
          {
              title: 'Boxed Forgot Password',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/forgot-password2'
          },

          {
              title: 'Side Two Steps',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/two-step'
          },
          {
              title: 'Boxed Two Steps',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/two-step2'
          },

          {
              title: 'Error',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/404'
          },
          {
              title: 'Maintenance',
              icon: CircleIcon,
              chip: 'Pro',
              external: true,
              to: 'https://flexy-nuxtjs-main.netlify.app/auth/maintenance'
          }
      ]
  },
  { header: 'Extra' },
  {
      title: 'Icons',
      icon: MoodHappyIcon,
      to: '/pages/icons',
      external: false
  },

];

export default sidebarItem;
