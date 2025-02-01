import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Bell, Building2, HardHat } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const dummyData = {
  professionals: [
    { id: 1, name: "Marie Durant", role: "Architecte", company: "Archi Design", contact: "marie@archidesign.fr" },
    { id: 2, name: "Thomas Bernard", role: "BET Structure", company: "IngeConsult", contact: "t.bernard@ingeconsult.fr" },
    { id: 3, name: "Laurent Petit", role: "Construction", company: "BâtiPro", contact: "l.petit@batipro.fr" }
  ],
  technicians: [
    { id: 1, name: "Jean Martin", speciality: "Électricité", availability: "Lun-Ven", contact: "j.martin@ar-eng.fr" },
    { id: 2, name: "Sophie Dubois", speciality: "Plomberie", availability: "Mar-Sam", contact: "s.dubois@ar-eng.fr" },
    { id: 3, name: "Pierre Leroy", speciality: "HVAC", availability: "Lun-Ven", contact: "p.leroy@ar-eng.fr" }
  ],
  interventions: [
    { id: 1, date: "2024-03-20", type: "Visite technique", technician: "Jean Martin" },
    { id: 2, date: "2024-03-25", type: "Installation", technician: "Sophie Dubois" },
    { id: 3, date: "2024-04-02", type: "Maintenance", technician: "Pierre Leroy" }
  ],
  notifications: [
    { id: 1, message: "Étape de conception validée", date: "2024-03-15", read: false },
    { id: 2, message: "Intervention confirmée pour le 20/03", date: "2024-03-16", read: false },
    { id: 3, message: "Nouveau document disponible", date: "2024-03-17", read: true }
  ]
};

const ProjectDashboard = () => {
  const { t } = useLanguage();
  const projectStatus = "en cours";

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Suivi de Projet</h1>
        <Badge variant="outline" className="text-lg px-4 py-1">
          {projectStatus.toUpperCase()}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Professionnels Partenaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {dummyData.professionals.map((pro) => (
                <div key={pro.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{pro.name}</div>
                  <div className="text-sm text-muted-foreground">{pro.role} - {pro.company}</div>
                  <div className="text-sm text-muted-foreground">{pro.contact}</div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardHat className="h-5 w-5" />
              Techniciens Affectés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {dummyData.technicians.map((tech) => (
                <div key={tech.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.speciality}</div>
                  <div className="text-sm text-muted-foreground">Disponibilité: {tech.availability}</div>
                  <div className="text-sm text-muted-foreground">{tech.contact}</div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Interventions Planifiées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {dummyData.interventions.map((intervention) => (
                <div key={intervention.id} className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="font-medium">{intervention.type}</div>
                  <div className="text-sm text-muted-foreground">
                    Date: {new Date(intervention.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technicien: {intervention.technician}
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
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {dummyData.notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`mb-4 p-3 rounded-lg ${
                    notif.read ? 'bg-accent/10' : 'bg-primary/10'
                  }`}
                >
                  <div className="font-medium">{notif.message}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(notif.date).toLocaleDateString('fr-FR')}
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