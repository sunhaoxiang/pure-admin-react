import { Affix } from 'antd'
import classnames from 'classnames'
import { useEffect } from 'react'
import type { ReactElement } from 'react'

import { useLayoutDashboardAffix } from '../useLayoutDashboardAffix'

export interface AffixBottomProps {
  children: ReactElement
  onHeightChange?: (height: number) => void
}

function Index(props: AffixBottomProps) {
  const { children, onHeightChange } = props

  const { affixed, wrapperRef, size, onChange } = useLayoutDashboardAffix()

  useEffect(() => {
    if (size?.height && size.height > 0 && onHeightChange) {
      onHeightChange(size.height)
    }
  }, [size, onHeightChange])

  const wrapperClassnames = classnames('border-gray-200', {
    'bg-white border-t': affixed
  })

  const wrapperStyle = {
    boxShadow: affixed ? '0px -5px 10px rgba(209 213 219 / 0.1)' : 'none'
  }

  return (
    <Affix offsetBottom={0} onChange={onChange}>
      <div ref={wrapperRef} className={wrapperClassnames} style={wrapperStyle}>
        <div className="px-6 py-4">{children}</div>
      </div>
    </Affix>
  )
}

export default Index
