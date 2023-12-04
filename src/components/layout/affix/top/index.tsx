import { Affix } from 'antd'
import classnames from 'classnames'
import { forwardRef, useEffect, useImperativeHandle } from 'react'
import type { ReactElement } from 'react'

import { HEADER_HEIGHT } from '../../constants'
import { useLayoutDashboardAffix } from '../useLayoutDashboardAffix'
import type { AffixRef } from '../useLayoutDashboardAffix'

export interface AffixTopProps {
  children: ReactElement
  onHeightChange?: (height: number) => void
}

const Index = forwardRef<AffixRef, AffixTopProps>(function Index(props, ref) {
  const { children, onHeightChange } = props

  const { affixed, affixRef, wrapperRef, updatePosition, size, onChange } =
    useLayoutDashboardAffix()

  useImperativeHandle(
    ref,
    () => {
      return {
        updatePosition
      }
    },
    [updatePosition]
  )

  useEffect(() => {
    if (size?.height && size.height > 0 && onHeightChange) {
      onHeightChange(size.height)
    }
  }, [size, onHeightChange])

  const wrapperClassnames = classnames('border-gray-200', {
    'bg-white border-b': affixed
  })

  const wrapperStyle = {
    boxShadow: affixed ? '0px 5px 10px rgba(209 213 219 / 0.1)' : 'none'
  }

  return (
    <Affix ref={affixRef} offsetTop={HEADER_HEIGHT} onChange={onChange}>
      <div ref={wrapperRef} className={wrapperClassnames} style={wrapperStyle}>
        <div className="px-6 py-4">{children}</div>
      </div>
    </Affix>
  )
})

export default Index
