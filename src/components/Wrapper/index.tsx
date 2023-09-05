import { UIShellWrapper } from "@src/components/Wrapper/UIShellWrapper"
import { GlobalProvider } from "@src/hook/useGlobalContext"

export const Wrapper = (props) => {
  return (
    <GlobalProvider>
      <UIShellWrapper>
        {props.children}
      </UIShellWrapper>
    </GlobalProvider>
  )
}