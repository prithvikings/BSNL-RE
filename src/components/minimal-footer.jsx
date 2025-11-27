import {
	FacebookIcon,
	GithubIcon,
	Grid2X2Plus,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
} from 'lucide-react';

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: 'About BSNL', href: '#' },
    { title: 'Leadership', href: '#' },
    { title: 'Press & Media', href: '#' },
    { title: 'Policies & Guidelines', href: '#' },
    { title: 'Careers at BSNL', href: '#' },
  ];

  const resources = [
    { title: 'Plans & Pricing', href: '#' },
    { title: 'Customer Support', href: '#' },
    { title: 'Service Centers', href: '#' },
    { title: 'Maintenance', href: '#' },
    { title: 'Network Coverage', href: '#' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: '#' },
    { icon: <GithubIcon className="size-4" />, link: '#' },
    { icon: <InstagramIcon className="size-4" />, link: '#' },
    { icon: <LinkedinIcon className="size-4" />, link: '#' },
    { icon: <TwitterIcon className="size-4" />, link: '#' },
    { icon: <YoutubeIcon className="size-4" />, link: '#' },
  ];

  return (
    <footer className="relative bg-white text-neutral-800">
      <div className="
        bg-[radial-gradient(35%_80%_at_30%_0%,rgba(0,0,0,0.04),transparent)] 
        mx-auto max-w-4xl border-x border-neutral-200
      ">
        <div className="bg-neutral-200 absolute inset-x-0 h-px w-full" />

        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="#" className="w-max opacity-25">
              <Grid2X2Plus className="size-8 text-neutral-700" />
            </a>

            <p className="max-w-sm font-mono text-sm text-neutral-600">
              India’s trusted state-owned telecom provider delivering reliable
              connectivity.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                  target="_blank"
                  href={item.link}
                >
                  <span className="text-neutral-700">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-neutral-500">Resources</span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm text-neutral-700 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-neutral-500">Company</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm text-neutral-700 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-200 absolute inset-x-0 h-px w-full" />

        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-center text-neutral-500 font-thin">
            © Bharat Sanchar Nigam Limited. All rights reserved {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

