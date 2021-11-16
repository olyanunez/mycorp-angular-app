export const menu = [
  {
    idMenu: 1,
    label: "DashDoard",
    url:'/dashboard',
    subMenus: []
  },
  {
    idMenu: 2,
    label: "Admin usuarios",
    url:'/administracionUsuarios',
    subMenus: [
      {
        idMenu: 4,
        idMenuPadre:3,
        label: "Usuarios",
        url:'/usuarios',
        subMenus: []
      },
      {
        idMenu: 6,
        idMenuPadre:3,
        label: "Perfiles",
        url:'/perfiles',
        subMenus: []
      },
    ]
  },
  {
    idMenu: 3,
    label: "Contabilidad",
    url:'/contabilidad',
    subMenus: []
  },
]

export interface menulistInterace{
  idMenu: number;
  idMenuPadre?: number;
  label: string;
  url: string;
  subMenus: any;
}
