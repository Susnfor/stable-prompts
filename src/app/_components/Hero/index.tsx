/* eslint-disable simple-import-sort/imports */
import React from 'react'

import { Page } from '../../../payload/payload-types'
import { HighImpactHero } from '../../_heros/HighImpact'
import { LowImpactHero } from '../../_heros/LowImpact'
import { MediumImpactHero } from '../../_heros/MediumImpact'
import { CustomHero } from '../../_heros/CustomHero'
import { SideCustomHero } from '../../_heros/SideCustomHero'
import { SideBorderCustomHero } from '../../_heros/SideBorderCustomHero'

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
  customHero: CustomHero,
  sideCustomHero: SideCustomHero,
  sideBorderCustomHero: SideBorderCustomHero,
}

export const Hero: React.FC<Page['hero']> = props => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
