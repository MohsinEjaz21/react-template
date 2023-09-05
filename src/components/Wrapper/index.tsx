import { UIShellWrapper } from "@src/components/Wrapper/UIShellWrapper"

export const Wrapper = (props) => {
  return (
    <UIShellWrapper>
      {props.children}
    </UIShellWrapper>
  )
}