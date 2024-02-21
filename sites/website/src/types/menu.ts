export type Menu = {
  id: number
  title: string | React.JSX.Element
  path?: string
  newTab: boolean
  onClick?: () => boolean
  submenu?: Menu[]
}
