import Cursor from "@/components/common/Cusror";
import { Icons } from "@/components/common/icons";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import SEO from "@/components/common/Seo";
import { SiteFooter } from "@/components/common/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { routesConfig } from "@/config/routes";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Cursor />
      <SEO />
      <div className="flex min-h-screen flex-col">
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm">
          <div className="container flex h-20 items-center justify-between py-6">
            <MainNav items={routesConfig.mainNav} />
            <nav className="flex items-center gap-5">
              <a
                href="/YashReactjs.pdf"
                download
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "hidden md:inline-flex"
                )}
                aria-label="Download Yash Vekariya's CV"
              >
                <Icons.download className="w-4 h-4 mr-2" /> Download CV
              </a>
              <ModeToggle />
            </nav>
          </div>
        </header>

        <main className="container flex-1 mt-20">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
