import "../styles/globals.css";
import type { AppProps /* , AppContext */ } from "next/app";
import { AtlassianIcon, JiraIcon } from "@atlaskit/logo";
import Navigation, {
  AkNavigationItem,
  AkContainerTitle,
} from "@atlaskit/navigation";
import DashboardIcon from "@atlaskit/icon/glyph/dashboard";
import GearIcon from "@atlaskit/icon/glyph/settings";
import AddIcon from "@atlaskit/icon/glyph/add";

import Page from "@atlaskit/page";
import { ComponentType, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { IconProps } from "@atlaskit/icon";

interface NavOption {
  url: string;
  title: string;
  Icon: ComponentType<IconProps>;
}

function TraX({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { company } = router.query;

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navLinks: NavOption[] = [
    { url: `/${company}`, title: "Overview", Icon: DashboardIcon },
    { url: `/${company}/suppliers`, title: "Your suppliers", Icon: GearIcon },
    { url: `/${company}/edit-report`, title: "Report", Icon: AddIcon },
  ];

  return (
    <Page
      navigation={
        <Navigation
          isOpen={isOpen}
          onResize={() => setIsOpen(!isOpen)}
          globalPrimaryIcon={<AtlassianIcon size="large" />}
          containerHeaderComponent={() => (
            <AkContainerTitle
              href="/"
              icon={<JiraIcon size="small" />}
              text="TraX"
            />
          )}
        >
          {navLinks.map((link) => {
            const { url, title, Icon } = link;
            return (
              <Link key={url} href={url}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={router.asPath === url}
                />
              </Link>
            );
          })}
        </Navigation>
      }
    >
      <Component {...pageProps} />
    </Page>
  );
}

export default TraX;
