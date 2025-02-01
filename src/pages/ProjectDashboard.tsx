import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Bell, Building2, HardHat } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "react-router-dom";

const dummyProjects = {
  "1": {
    id: 1,
    name: "Rénovation Appartement Paris",
    status: "inProgress",
    client: "M. Dubois",
    startDate: "2024-01-15",
    professionals: [
      { id: 1, name: "Marie Durant", role: "Architecte", company: "Archi Design", contact: "marie@archidesign.fr" },
      { id: 2, name: "Thomas Bernard", role: "BET Structure", company: "IngeConsult", contact: "t.bernard@ingeconsult.fr" },
    ],
    technicians: [
      { id: 1, name: "Jean Martin", speciality: "Électricité", availability: "Lun-Ven", contact: "j.martin@ar-eng.fr" },
      { id: 2, name: "Sophie Dubois", speciality: "Plomberie", availability: "Mar-Sam", contact: "s.dubois@ar-eng.fr" },
    ],
    interventions: [
      { id: 1, date: "2024-03-20", type: "Visite technique", technician: "Jean Martin" },
      { id: 2, date: "2024-03-25", type: "Installation", technician: "Sophie Dubois" },
    ],
    notifications: [
      { id: 1, message: "Étape de conception validée", date: "2024-03-15", read: false },
      { id: 2, message: "Intervention confirmée pour le 20/03", date: "2024-03-16", read: false },
    ],
  },
  // Add more projects as needed
};

const ProjectDashboard = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const project = dummyProjects[id as keyof typeof dummyProjects];

  if (!project) {
    return <div className="p-6">Projet non trouvé</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Badge variant="outline" className="text-lg px-4 py-1">
          {t(project.status)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {t('professionals')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {project.professionals.map((pro) => (
                <div key={pro.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{pro.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('role')}: {pro.role} - {t('company')}: {pro.company}
                  </div>
                  <div className="text-sm text-muted-foreground">{t('contact')}: {pro.contact}</div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardHat className="h-5 w-5" />
              {t('technicians')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {project.technicians.map((tech) => (
                <div key={tech.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('speciality')}: {tech.speciality}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('availability')}: {tech.availability}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('contact')}: {tech.contact}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {t('interventions')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {project.interventions.map((intervention) => (
                <div key={intervention.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{intervention.type}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('date')}: {new Date(intervention.date).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('technician')}: {intervention.technician}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              {t('notifications')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {project.notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`mb-4 p-3 rounded-lg ${
                    notif.read ? 'bg-accent/10' : 'bg-primary/10'
                  }`}
                >
                  <div className="font-medium">{notif.message}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(notif.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDashboard;