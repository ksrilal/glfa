import { NbMenuItem } from "@nebular/theme";

export const boxoffice: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/pages/iot-dashboard"
  },
  {
    title: "Box Office",
    group: true
  },
  {
    title: "Redeem Ticket",
    icon: "layers-outline",
    link: "/pages/redeem"
  },
  {
    title: "Staff Management",
    icon: "people-outline",
    children: [
      {
        title: "Add Staff",
        link: "/pages/staff-management/add-staff"
      },
      {
        title: "Modify Staff",
        link: "/pages/staff-management/modify-staff"
      }
    ]
  },
  {
    title: "Ticket Management",
    icon: "home-outline",
    link: "/pages/ticket-management"
  },
  {
    title: "Filter Sales",
    icon: "home-outline",
    link: "/pages/filter-sales"
  }
];

export const volunteerCoordinator: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/pages/iot-dashboard"
  },
  {
    title: "Volunteer Coordinator",
    group: true
  },
  {
    title: "Volunteer Management",
    icon: "people-outline",
    children: [
      {
        title: "Add Volunteer",
        link: "/pages/volunteer-management/add-volunteer"
      },
      {
        title: "Modify Volunteer",
        link: "/pages/volunteer-management/modify-volunteer"
      },
      {
        title: "Find Volunteer",
        link: "/pages/volunteer-management/find-volunteer"
      }
    ]
  },
  {
    title: "Task Management",
    icon: "people-outline",
    children: [
      {
        title: "Assign Tasks",
        link: "/pages/task-management/assign-tasks"
      },
      {
        title: "Task Status",
        link: "/pages/task-management/tasks-status"
      }
    ]
  }
];
export const transportationCoordinator: NbMenuItem[] = [
         {
           title: "E-commerce",
           icon: "shopping-cart-outline",
           link: "/pages/dashboard",
           home: true
         },
         {
           title: "IoT Dashboard",
           icon: "home-outline",
           link: "/pages/iot-dashboard"
         },
         {
           title: "Transportation Coordinator",
           group: true
         },
         {
           title: "Driver Management",
           icon: "people-outline",
           children: [
             {
               title: "Add drivers",
               link: "/pages/driver-management/add-driver"
             },
             {
               title: "Modify drivers",
               link: "/pages/driver-management/modify-driver"
             }
           ]
         },
         {
           title: "Request Volunteers",
           icon: "people-outline",
           children: [
             {
               title: "Request Volunteers",
               link: "/pages/request-volunteers/req-volunteers"
             }
           ]
         },
         {
           title: "View Drivers",
           icon: "people-outline",
           children: [
             {
               title: "View Drivers",
               link: "/pages/driver-state/view-drivers"
             }
           ]
         },
         {
           title: "Chat",
           icon: "people-outline",
           children: [
             {
               title: "Chat",
               link: "/pages/transpotation-chat/chat"
             }
           ]
         }
       ];

export const manager: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/pages/iot-dashboard"
  },

  {
    title: "Festival Manager",
    group: true
  },
  {
    title: "Author Management",
    icon: "layout-outline",
    children: [
      {
        title: "Add author",
        link: "/pages/author-management/add-author"
      },
      {
        title: "Modify author",
        link: "/pages/author-management/modify-author"
      }
    ]
  },
  {
    title: "Staff Management",
    icon: "layout-outline",
    children: [
      {
        title: "Add staff",
        link: "/pages/festival-staff-management/add-staff"
      },
      {
        title: "Modify staff",
        link: "/pages/festival-staff-management/modify-staff"
      }
    ]
  },
  {
    title: "Event Management",
    icon: "layout-outline",
    children: [
      {
        title: "Add Event",
        link: "/pages/event-management/add-event"
      },
      {
        title: "Modify event",
        link: "/pages/event-management/modify-event"
      }
    ]
  }
];

export const all: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/pages/iot-dashboard"
  },
  {
    title: "Forms",
    icon: "edit-2-outline",
    children: [
      {
        title: "Form Inputs",
        link: "/pages/forms/inputs"
      },
      {
        title: "Form Layouts",
        link: "/pages/forms/layouts"
      },
      {
        title: "Buttons",
        link: "/pages/forms/buttons"
      },
      {
        title: "Datepicker",
        link: "/pages/forms/datepicker"
      }
    ]
  },
  {
    title: "UI Features",
    icon: "keypad-outline",
    link: "/pages/ui-features",
    children: [
      {
        title: "Grid",
        link: "/pages/ui-features/grid"
      },
      {
        title: "Icons",
        link: "/pages/ui-features/icons"
      },
      {
        title: "Typography",
        link: "/pages/ui-features/typography"
      },
      {
        title: "Animated Searches",
        link: "/pages/ui-features/search-fields"
      }
    ]
  },
  {
    title: "Modal & Overlays",
    icon: "browser-outline",
    children: [
      {
        title: "Dialog",
        link: "/pages/modal-overlays/dialog"
      },
      {
        title: "Window",
        link: "/pages/modal-overlays/window"
      },
      {
        title: "Popover",
        link: "/pages/modal-overlays/popover"
      },
      {
        title: "Toastr",
        link: "/pages/modal-overlays/toastr"
      },
      {
        title: "Tooltip",
        link: "/pages/modal-overlays/tooltip"
      }
    ]
  },
  {
    title: "Extra Components",
    icon: "message-circle-outline",
    children: [
      {
        title: "Calendar",
        link: "/pages/extra-components/calendar"
      },
      {
        title: "Progress Bar",
        link: "/pages/extra-components/progress-bar"
      },
      {
        title: "Spinner",
        link: "/pages/extra-components/spinner"
      },
      {
        title: "Alert",
        link: "/pages/extra-components/alert"
      },
      {
        title: "Calendar Kit",
        link: "/pages/extra-components/calendar-kit"
      },
      {
        title: "Chat",
        link: "/pages/extra-components/chat"
      }
    ]
  },
  {
    title: "Maps",
    icon: "map-outline",
    children: [
      {
        title: "Google Maps",
        link: "/pages/maps/gmaps"
      },
      {
        title: "Leaflet Maps",
        link: "/pages/maps/leaflet"
      },
      {
        title: "Bubble Maps",
        link: "/pages/maps/bubble"
      },
      {
        title: "Search Maps",
        link: "/pages/maps/searchmap"
      }
    ]
  },
  {
    title: "Charts",
    icon: "pie-chart-outline",
    children: [
      {
        title: "Echarts",
        link: "/pages/charts/echarts"
      },
      {
        title: "Charts.js",
        link: "/pages/charts/chartjs"
      },
      {
        title: "D3",
        link: "/pages/charts/d3"
      }
    ]
  },
  {
    title: "Editors",
    icon: "text-outline",
    children: [
      {
        title: "TinyMCE",
        link: "/pages/editors/tinymce"
      },
      {
        title: "CKEditor",
        link: "/pages/editors/ckeditor"
      }
    ]
  },
  {
    title: "Tables & Data",
    icon: "grid-outline",
    children: [
      {
        title: "Smart Table",
        link: "/pages/tables/smart-table"
      },
      {
        title: "Tree Grid",
        link: "/pages/tables/tree-grid"
      }
    ]
  },
  {
    title: "Miscellaneous",
    icon: "shuffle-2-outline",
    children: [
      {
        title: "404",
        link: "/pages/miscellaneous/404"
      }
    ]
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];
