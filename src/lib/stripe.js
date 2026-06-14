import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export const PLAN_PRICE_ID ={
      'seeker_pro':
      'price_1TgnWYHeOvYKtmEpcsRsbtj0',
      'seeker_premium':
      'price_1TgqOwHeOvYKtmEpePWaQ0w0',
      'recruiter_growth':
      'price_1TgqQkHeOvYKtmEpG9JazdAf',
      'recruiter_enterprise':
      'price_1TgqTQHeOvYKtmEp8TH1mwck'
}  