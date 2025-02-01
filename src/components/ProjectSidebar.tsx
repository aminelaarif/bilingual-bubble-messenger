import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FileText, Users, HardHat, Calendar, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export function ProjectSidebar() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const menuItems = [
    {
      title: "Projets",
      icon: FileText,
      path: "/projects",
    },
    {
      title: "Professionnels Partenaires",
      icon: Building2,
      path: "/professionals",
    },
    {
      title: "Techniciens Affectés",
      icon: HardHat,
      path: "/technicians",
    },
    {
      title: "Interventions Planifiées",
      icon: Calendar,
      path: "/interventions",
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}