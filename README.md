# How the Internet Actually Works

**Live site: https://gitussr.github.io/how-internet-actually-works/**

A free, 12-chapter documentation site that explains the Internet from a single
electron to global submarine cable infrastructure — in one continuous,
connected story instead of a pile of disconnected Wikipedia pages.

---

## Why I built this

Every explanation of "how the Internet works" I'd ever read fell into one of
two traps. Either it was too shallow — a hand-wave about "the cloud" that
leaves you no better off than before you asked — or it was too narrow: a
protocol diagram of TCP/IP that assumes you already know what a packet is,
what a transistor does, or why a cable under the ocean matters at all.

Nobody was connecting the whole chain. A CS degree teaches you the OSI model
in isolation from physics. A bootcamp teaches you to call an API without ever
explaining what happens between your keyboard and the server. An electronics
course teaches you Ohm's Law and stops decades before TCP. Each piece exists
somewhere, taught by someone, but never as one story.

So the actual premise of this site is simple: **the Internet isn't one
invention, it's about a dozen independent engineering miracles stacked on
top of each other, each one blissfully ignorant of the layers above and
below it.** A transistor doesn't know what a web page is. A submarine cable
doesn't know what TCP is. And yet when you load a page, all twelve layers
cooperate in milliseconds without ever being introduced. That cooperation is
the actual trick worth understanding — and the entire site is built to walk
you down through it, layer by layer, until it stops looking like magic.

## The philosophy behind how it's written

A few rules I held myself to on every single page:

- **Concept → mechanism → lab, every time.** Each chapter starts with a
  plain-language explanation and an analogy (no assumed jargon), then goes
  one level deeper into the actual packet/protocol/kernel mechanics, then
  hands you a real command to run — `tcpdump`, `curl`, `openssl`,
  `traceroute`, `iptables` — so you're not just reading about the concept,
  you're watching it happen on your own machine.
- **Cite the surprising stuff.** Any fact that made me go "wait, really?" —
  drift velocity in copper, the 64-byte Ethernet minimum, the 2008 BGP
  hijack, satellites carrying 0.37% of international traffic — is grounded
  in a named, checkable source. If a claim can't be traced to something
  real, it doesn't get the "did you know" treatment.
- **Payoffs, not just facts.** Ideas introduced early get paid off later on
  purpose. The intro teases that fiber carries almost all international
  data; Chapter 2 derives the actual physics of why; Chapter 12 closes the
  loop with the full submarine cable picture. It's meant to be read as one
  argument, not twelve unrelated wiki entries.
- **Defensive knowledge only.** Every security-adjacent chapter (NAT,
  firewalls, encryption) stays firmly on the "understand and defend" side of
  the line. Nothing here is a how-to for attacking a network you don't own.
- **Depth is optional, not mandatory.** You can stop after the analogy and
  walk away with a real mental model, or go all the way through the lab and
  walk away able to *do* the thing. Both are legitimate ways to read this.

## Reading guide

**If you're starting from zero:** read it in order, 01 → 12. It's built
bottom-up on purpose — physics, then wires, then packets, then protocols,
then planet-scale infrastructure — so each chapter leans on the one before
it. Budget roughly 4–5 hours total if you read every chapter start to
finish; each page states its own estimated time up front.

**If you already know the basics of one layer:** every chapter is also
written to stand alone. Jump straight to the one you need — the site's
search bar and sidebar are built for exactly that.

**If you want the deep version, not the skim:** actually run the labs.
Reading "here's how a TCP handshake works" is not the same as watching
Wireshark show you the SYN / SYN-ACK / ACK yourself. The labs are short —
most take under five minutes — and they're where the concept actually
lands.

**Two pages aren't part of the reading path at all:**
- **Appendices & Bibliography** — every tool, RFC, and source used across
  all twelve chapters, indexed for lookup, not for reading start to finish.
- The site's internal design system, used to keep 13 chapters visually
  consistent while being written one at a time.

## What you should be able to do after reading this

- Explain, honestly and specifically, what happens between pressing Enter
  on a URL and a page rendering — across all twelve layers, not just the
  parts you already knew.
- Use Wireshark, `tcpdump`, `curl`, `openssl`, `dig`, `traceroute`, and
  `iptables` with actual understanding of what you're looking at, not just
  copied commands.
- Diagnose your own network problems — "why is this slow," "why can't this
  device reach that one," "is this actually encrypted" — from first
  principles instead of guesswork.
- Read and reason about real infrastructure: a VPC diagram, a load balancer
  config, a BGP route, a TLS handshake, a firewall rule — and know *why*
  each piece exists, not just its name.
- Hold your own in a systems or networking interview without the
  conversation being your first real exposure to the material.
- Make informed decisions about your own privacy and security online — VPNs,
  encryption, what a firewall actually protects you from — instead of
  cargo-culting advice you don't fully trust.

## Problems this is meant to solve

- **The gap between "I passed the networking course" and "I actually
  understand my own home Wi-Fi."** Most formal education teaches this
  material in disconnected fragments across different classes, years apart.
- **The gap between curiosity and access.** You don't need a CS degree,
  a textbook, or prior electronics knowledge to start here — Chapter 1
  assumes nothing.
- **Scattered, inconsistent sources.** Instead of fifteen browser tabs of
  blog posts written at different depths with no shared narrative, this is
  one connected explanation, written to one standard, citing its sources.
- **Passive reading that doesn't stick.** The lab in every chapter exists
  because reading about a TCP handshake and watching one happen produce two
  completely different levels of retention.

## What's in the site

| # | Chapter | Covers |
|---|---------|--------|
| — | Introduction | The site's premise, the layered-cooperation idea, how to read it |
| 01 | Electricity & Electronics | Electrons, voltage, Ohm's Law, transistors |
| 02 | Physical Media | Copper, fiber optics, radio waves |
| 03 | Link Layer | Ethernet frames, MAC addresses, switches vs. hubs, Wi-Fi |
| 04 | Network Layer | IPv4/IPv6, ARP, routing, BGP |
| 05 | Transport Layer | TCP's handshake and congestion control, UDP |
| 06 | Sessions & Applications | HTTP/HTTPS, TLS, SSH, WebSockets, DNS, SMTP |
| 07 | Servers & Data Centers | What a server is, databases, VPCs, load balancers |
| 08 | Mobile & Cellular Networks | Cell towers, handover, SIMs, 2G–5G |
| 09 | IoT & Radio Devices | BLE, Zigbee, LoRaWAN, IR remotes, radar |
| 10 | OS & Kernel Internals | Sockets, interrupts, epoll, eBPF |
| 11 | Security & Privacy | NAT, firewalls, VPNs, encryption |
| 12 | Global Infrastructure | Tier-1 networks, IXPs, submarine cables |
| — | Appendices & Bibliography | Every tool, RFC, and source used, indexed |

## How the site itself is built

Plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no
dependencies to install. Client-side search, a light/dark theme toggle, and
a fully responsive layout down to 320px wide, all hosted for free on GitHub
Pages directly from this repo.
