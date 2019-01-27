# Cloudflare DNS Resolver for Google Assistant
Google Assistant action that allows users to resolve DNS queries using Cloudflare's 1.1.1.1 DNS resolver.

**This action is currently in `Alpha` testing.**

## How to use
Right now, it's in Alpha testing (limited testing to max 20 testers).

If you want to get into the Alpha testers pool, [message xDrixxyz on Keybase](https://keybase.io/xdrixxyz) with your email address to get in.

Then, follow the real use instructions down below.

## Release schedule
As of now, I will be releasing new versions rapidly as I fix bugs and "add new features".

Once I believe this action is stable enough for a Beta release, I'll release it to beta! This means that more testers will be able to join (max increased to 200)

During the Beta phase, I'll update this README to reflect how you can join and participate in bug hunting and contributing.

Then, once I believe it's ready for primetime, I'll submit it to Google to review it for a production release! At this point, you will be able to use it without needing to sign up to be a tester!

## But really, how do I use it?
Use one of the invocation phrases (assuming you've been invited to test):

- `Talk to Cloudflare DNS Resolver`
- `Ask Cloudflare DNS Resolver to get the value of the {dns record type} record for {domain}`

An example of the 2nd invocation phrase in action is: `Hey Google, Ask Cloudflare DNS Resolver to get the value of the AAAA record for cloudflare.com`

The action will respond with the value of the AAAA record for cloudflare.com

Or, better yet, `Ask Cloudflare DNS Resolver to get the value of the TXT record for dani.cloudflare.com`

## How does it work?
Using state-of-the-art [DNS-over-HTTPS (DoH)](https://lmgtfy.com/?q=dns+over+https) technology powered by [1.1.1.1](https://1.1.1.1)

## How can I contribute?
Read the [Contribution Guide](/CONTRIBUTING.md)
