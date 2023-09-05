import { UIShellWrapper } from "@src/components/Wrapper/UIShellWrapper"

export const Wrapper = (props) => {
  return (
    // <GlobalProvider>
    <UIShellWrapper>
      {props.children}
    </UIShellWrapper>
    // </GlobalProvider>
  )
}