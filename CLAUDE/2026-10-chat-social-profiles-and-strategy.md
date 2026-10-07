# Chat log: social profiles in the schema, and the social strategy plan

- **Session:** https://claude.ai/code/session_01XafK16dh58NmVh1QcEdyWH
- **Dates:** Oct 5 to Oct 7, 2026
- **Branch:** `claude/jolly-cannon-sucx2i`
- **Strategy doc (live, editable):** https://claude.ai/code/artifact/54757a6f-842d-45d1-a5d6-4f800ae4789b

This folder is listed under `exclude` in `_config.yml`, so GitHub Pages leaves it out of the public site.

---

## 1. Facebook profile

**Tracy:** https://www.facebook.com/tracy.craleyknappfreeman

**Claude:** I added Tracy's Facebook profile to the site's schema (the hidden search-engine data, not a visible link). Search engines can now connect the site to her Facebook page. I rebuilt the site, checked that the schema on the homepage carries the new link, and pushed the change.

- **Where it went:** a new `PROFILES` list in `build.py`, used as `sameAs` on the Person (Tracy) record, because it's her personal profile.
- **Nothing visible changed:** the site doesn't show a Facebook link, because of the rule that her phone number is the only contact info on the site.
- **Open question:** should the site also show a small Facebook icon in the footer? I held off because it would bend the phone-only rule.

Commit: "Add Tracy's Facebook profile as Person sameAs in schema"

## 2. Instagram profile

**Tracy:** https://www.instagram.com/tracymortgagelady

**Claude:** @tracymortgagelady is the brand account, so it went in a new `BRAND_PROFILES` list in `build.py`, used as `sameAs` on the FinancialService ("Tracy the Mortgage Lady") record. I rebuilt the site, checked the schema and pushed. I also updated the to-do in `CLAUDE.md`.

Commit: "Add Tracy the Mortgage Lady Instagram as FinancialService sameAs in schema"

## 3. Social media review and 180-day growth plan

**Tracy:** You are the #1 social manager in the United States. Review my profiles, provide me feedback as well as a strategy surrounding my brand and a 180-day step-by-step plan to achieve explosive growth.

**Claude:** I wrote the strategy and the 180-day plan as an editable doc (link at the top). I couldn't open Instagram or Facebook because the cloud environment blocks both sites. So the profile feedback is a checklist to grade them against, not a review of the actual posts. A web search found her LinkedIn, and it may still mention another company, "Moto Financial Group." That should be checked first. For a real profile review, send screenshots of each profile's top section, the last 9 to 12 posts and 30-day Insights. Question left in the doc: should the focus stay on investors first, or should home buyers get equal weight?

The doc's content, as written on Oct 5, 2026, follows. The live doc may have changed since.

---

### What I could review

I could not open the Instagram or Facebook profiles. The environment I work in blocks both sites, so the feedback below is a checklist to grade them against, not a line-by-line audit.

What a web search did turn up:

- **LinkedIn:** a profile named [Tracy Craley Freeman, Mortgage Broker at Mpire](https://www.linkedin.com/in/tracy-craley-freeman-58819492/). The search summary also linked her to a "Moto Financial Group". If any profile still names an old or different company, fix it first, because a mismatch between profiles and her NMLS record is a compliance issue.
- **Industry footprint:** a [Women's Council of REALTORS profile](https://www.wcr.org/profile/tracy-freeman/) and a mention in [CFRI's October 2024 newsletter](https://fliphtml5.com/mjtvnf/ezyf/CFRI_October_2024_News/21/), a local real estate investor group. Both are good sources of credibility and referrals.
- **Brand search:** searching for "Tracy the Mortgage Lady" returns no owned results yet. The new website and a Google Business Profile will fix that.

For a true audit, send screenshots of each profile's top section (photo, name, bio, link, highlights) and the last 9 to 12 posts. If you have them, also send 30-day Insights for reach, followers and profile visits.

### Profile feedback

The biggest likely gap is consistency. One brand name, one face and one phone number should show up everywhere, with her NMLS number on every profile. Check each item and tick it off.

**Everywhere (do these first)**

- [ ] Same display name pattern: "Tracy Freeman | Tracy the Mortgage Lady"
- [ ] Same headshot as the website, cropped tight so the face reads at thumbnail size
- [ ] NMLS #2174804 and "Mpire Financial Group LLC, NMLS #2108504" in the bio or About section
- [ ] Phone 352-223-0712 and a link to tracymortgagelady.com
- [ ] Current company everywhere: no old employer left in a headline, intro or work history
- [ ] Equal Housing Opportunity statement on business profiles (ask Mpire compliance for the exact wording)

**Instagram (@tracymortgagelady)**

- [ ] Professional account, category "Mortgage Broker", contact button set to call or text 352-223-0712
- [ ] Name field holds a search keyword: "Tracy | Mortgage Lady FL". The name field is searchable; the bio isn't.
- [ ] Bio answers who, for whom and what next in 3 lines. Example: "Former nurse turned mortgage broker 🏡 / DSCR, fix & flip, construction loans for investors / Text me: 352-223-0712", then the NMLS line.
- [ ] 4 to 6 highlights: Start Here, DSCR, Fix & Flip, Build (ground-up), First Home, Closings
- [ ] 3 pinned posts: who she is (the nurse story), a client closing, and the most-saved explainer

**Facebook (personal profile)**

- [ ] Intro: "Mortgage broker at Mpire Financial Group | Former nurse | Central Florida investor" plus the NMLS line
- [ ] Work and website fields filled in, with featured photos showing her at closings and events
- [ ] Turn on Professional Mode. Followers then see her public posts and she gets insights, without a separate page.
- [ ] Decide on a Facebook business page "Tracy the Mortgage Lady". It's needed to run ads and to link with Instagram for scheduling.

**LinkedIn**

- [ ] Headline: "Mortgage Broker, NMLS #2174804 | DSCR, Fix & Flip and Construction Loans for Investors | Mpire Financial Group"
- [ ] About section tells the nurse to investor to broker story in 5 short paragraphs and ends with the phone number
- [ ] Turn on Creator mode topics: real estate investing, mortgages, Florida real estate

**Google Business Profile (not created yet)**

- [ ] Create it as a service-area business, with no street address shown and the service counties listed
- [ ] Category "Mortgage broker", phone, website, photos, and the loan programs added as services
- [ ] Ask every closed client for a Google review. Reviews drive local search more than any social post.

### Brand strategy

Position Tracy as **the investor's mortgage broker with a nurse's heart**. She is an investor herself and explains creative financing in plain words. Plenty of loan officers post rates. Few can say "I invest in real estate myself, and I used to be a nurse." That story is the moat, so lead with it.

**Who it's for**

1. **Primary: Florida and out-of-state investors.** New and growing landlords, BRRRR investors, flippers and small builders. They are underserved by banks, and they repeat: an investor who buys every year brings a new loan with each deal.
2. **Multiplier: referral partners.** Investor-friendly realtors, wholesalers, contractors, CPAs and property managers. One partner is worth more than 1,000 followers.
3. **Secondary: Central Florida home buyers.** Self-employed buyers who need bank statement loans and first-time buyers. These are nurses and healthcare workers she can talk to as one of them.

**Content pillars**

| Pillar | Share of posts | What it looks like |
| --- | --- | --- |
| Teach | 40% | 60-second explainers: "What's a DSCR loan?", "No W-2s? Here's how you still qualify", "Can you get a loan to build from the ground up?" |
| Prove | 20% | Closing stories (with client permission), deal breakdowns from her own investments, partner shout-outs |
| Personal | 20% | Nurse to broker story, day in the life, property tours, Central Florida life |
| Local | 10% | Central Florida market notes, neighborhoods investors are watching, local events |
| Invite | 10% | "Text me DSCR and I'll tell you if your deal works", Q&A lives, workshop invites |

**Voice:** warm, direct and plain-spoken, like a nurse explaining a diagnosis. Short sentences, no jargon without a translation, and always one clear next step. Recurring phrases: "There's no one-size-fits-all loan" and "Let's find the option that fits your strategy."

**Formats that grow fastest now:** short vertical video (Reels, plus the same files on Facebook, YouTube Shorts and TikTok), carousels people save, and Stories for daily touchpoints. Use her face in the first second and on-screen captions, since most people watch on mute.

**The funnel:** every post points to one action, which is to text or call 352-223-0712.

1. Reel or carousel gets seen
2. Viewer comments a keyword ("DSCR") or DMs
3. Tracy (or an auto-reply) sends a short answer and asks for a text or call
4. The phone conversation, then the website's DSCR calculator or loan page as follow-up
5. Closed loan, then a review, a testimonial and a referral ask

### Compliance guardrails

Mortgage posts are advertising in the eyes of regulators, so growth can't come at the cost of her license. Have Mpire's compliance team approve this list and a few sample posts before Week 1.

- **NMLS IDs on every profile and ad.** Hers and Mpire's.
- **No rates, payments or down-payment numbers without the full required disclosures.** Naming a specific rate, payment or down payment in an ad can trigger extra disclosure rules. The simplest safe habit: talk about programs and how they work, not numbers. Then "Call me for today's options."
- **No promises.** Say "may qualify" and "options available," never "guaranteed approval" or "anyone can qualify."
- **Program claims stay accurate.** For example: DSCR up to 10 units; no W-2s or tax returns for DSCR, fix and flip and bank statement loans; DSCR and fix and flip in most states.
- **Client privacy.** Get written permission before any closing photo, name or story, and never show loan documents or addresses.
- **Fair housing.** No content or ad targeting that favors or excludes people by protected class. Meta treats mortgage ads as a special category with limited targeting, so expect that.
- **Testimonials are real only.** Never invent or edit reviews.
- **Keep a record.** Save copies of posts and ads, since many lenders require social media archiving. Ask Mpire what tool they use.

### 180-day plan

The plan runs from Monday, Oct 12, 2026 to Friday, Apr 9, 2027, in four phases: fix the foundation, build a posting habit, multiply reach through partners, then scale what works. The steady output is 4 Reels, 2 carousels and daily Stories each week. That's about 3 to 4 hours a week, filmed in one batch session.

| Phase | Dates | Focus | Gate before the next phase |
| --- | --- | --- | --- |
| 1. Foundation | Oct 12 to Nov 10 | Profiles fixed, origin story Reel, Google profile live | Compliance approved |
| 2. Consistency | Nov 11 to Dec 25 | 4 Reels and 2 carousels a week, named weekly series, first Live Q&A | Posting every week |
| 3. Partners | Dec 26 to Feb 23 | Weekly collab Reels, meetups and a workshop, small Reel boosts | Partner list of 30 built |
| 4. Scale | Feb 24 to Apr 9 | Spring buying push, lead magnet, hire help, 180-day review | |

Each gate has to pass before the next phase starts. Partners only multiply results once posting is a steady habit.

#### Phase 1: Foundation (Days 1 to 30, Oct 12 to Nov 10)

- [ ] **Week 1:** Fix every profile from the checklist above. Get Mpire compliance to approve the guardrails and 3 sample posts. Create the Google Business Profile and the Facebook business page.
- [ ] **Week 1:** Write the origin story once, in 60 seconds: nurse, then investor, then broker, then why she helps investors. It becomes her first pinned Reel, her LinkedIn About section and her talk track.
- [ ] **Week 2:** List the 50 questions clients actually ask. Each one is a post, which covers 3 months of Teach content.
- [ ] **Week 2:** Set up the tools: a scheduler (Meta Business Suite is free), CapCut or Edits for captions, and a ring light with a phone tripod.
- [ ] **Week 3:** First batch filming day: 12 Reels in 2 hours, same outfit, 2 locations. Start posting 4 Reels a week.
- [ ] **Week 3:** Set up keyword auto-replies on Instagram ("DSCR", "FLIP", "BUILD") that answer briefly and ask for a text to 352-223-0712.
- [ ] **Week 4:** Text or call every past client and partner. Ask them to follow, leave a Google review and introduce one investor friend.
- [ ] **Week 4:** Record a baseline of followers, reach, profile visits, calls and texts from social, and loans in process.

#### Phase 2: Consistency engine (Days 31 to 75, Nov 11 to Dec 25)

- [ ] **Weekly:** 4 Reels, 2 carousels, daily Stories (a behind-the-scenes clip, a poll, one question answered).
- [ ] **Weekly:** Spend 15 minutes a day engaging *before and after* posting. Comment on posts by local realtors, investor accounts and Central Florida pages.
- [ ] **Week 6:** Start a weekly series with a name, for example "DSCR Tuesday" or "Ask the Mortgage Lady". Series build habits in viewers.
- [ ] **Week 7:** Repurpose every Reel to Facebook, YouTube Shorts and TikTok, and every carousel to LinkedIn as a document post.
- [ ] **Week 8:** First Instagram or Facebook Live: a 20-minute investor Q&A. Save it and cut it into 4 clips.
- [ ] **Week 9:** Review the numbers. Make 3 more posts like the top 3 posts and drop the bottom format.
- [ ] **Week 10:** Holiday content: a year-end investor checklist and "buy before spring" planning posts.

#### Phase 3: Multiply through partners (Days 76 to 135, Dec 26 to Feb 23)

- [ ] **Week 11:** Build a list of 30 referral partners: investor-friendly realtors, wholesalers, contractors, CPAs, property managers and title reps.
- [ ] **Weeks 11 to 18:** Do one collaboration Reel a week with a partner (a Collab post shows on both accounts). Examples: "a realtor and a lender react to a flip", "a contractor and a lender on construction draws".
- [ ] **Week 12:** Show up in person at investor meetups such as CFRI and the Women's Council of REALTORS. Film a 30-second recap each time.
- [ ] **Week 14:** Host the first free workshop, for example "How to buy your first rental with a DSCR loan". Run it with a realtor partner and collect sign-ups by text.
- [ ] **Week 15:** Start a monthly LinkedIn newsletter for partners. Cover market notes, a program spotlight and one closed deal.
- [ ] **Week 16:** Test a small, compliance-approved boost ($5 to $10 a day) on the 2 best-performing Reels, aimed at reach and profile visits.
- [ ] **Week 18:** Turn testimonials into posts. Give each closed client a simple form to fill in, with their permission.

#### Phase 4: Scale what works (Days 136 to 180, Feb 24 to Apr 9)

- [ ] **Week 19:** Double down on the top series and the top partner. Cut anything that hasn't produced a conversation in 60 days.
- [ ] **Week 20:** Spring buying season push: a fix-and-flip and new-build series, plus a second workshop.
- [ ] **Week 21:** Make a lead magnet. Example: a one-page "DSCR deal checklist" sent by text when someone comments "CHECKLIST".
- [ ] **Week 22:** Consider a Spanish-language series if the audience asks. Central Florida has a large Spanish-speaking market.
- [ ] **Week 23:** Hand off editing or posting to a part-time assistant so Tracy only films and answers leads.
- [ ] **Week 26:** 180-day review: compare against the Week 4 baseline, then set the next 6-month targets.

### Metrics and weekly routine

Measure conversations and loans, not just followers. Growth only counts if the phone rings. Set the targets after the Week 4 baseline. A common first goal is to double each number's baseline by Day 180.

| Metric | Where to find it | Why it matters |
| --- | --- | --- |
| Calls and texts from social | Ask "how did you hear about me?" and log it | The only number that pays |
| Loans opened from social and partners | Her pipeline | Shows the return on time spent |
| Active referral partners | A simple partner list | Partners send repeat business |
| Profile visits and link taps | Instagram and Facebook insights | Shows content is creating interest |
| Saves and shares per post | Post insights | Best signal that content is useful |
| Reach and new followers | Account insights | Audience growth |
| Google reviews | Google Business Profile | Local search ranking and trust |

**Weekly routine (about 4 hours)**

1. **Monday, 30 min:** Plan the week's 6 posts from the question list and the weekly series.
2. **Tuesday, 90 min:** Batch film and caption.
3. **Daily, 15 min:** Stories, plus replies to every comment and DM within the day.
4. **Thursday, 30 min:** Partner outreach, with 2 messages and 1 collab pitch.
5. **Friday, 20 min:** Log the week's metrics and note the top post and why it worked.

---

## 4. Saving the chat

**Tracy:** Save this chat as an .md file, in the CLAUDE folder.

**Claude:** Saved as this file.
