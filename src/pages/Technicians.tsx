import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HardHat } from "lucide-react";

const dummyTechnicians = [
  { id: 1, name: "Jean Martin", speciality: "Électricité", availability: "Lun-Ven", contact: "j.martin@ar-eng.fr" },
  { id: 2, name: "Sophie Dubois", speciality: "Plomberie", availability: "Mar-Sam", contact: "s.dubois@ar-eng.fr" },
  { id: 3, name: "Pierre Leroy", speciality: "HVAC", availability: "Lun-Ven", contact: "p.leroy@ar-eng.fr" },
  { id: 4, name: "Marie Lambert", speciality: "Domotique", availability: "Mer-Dim", contact: "m.lambert@ar-eng.fr" },
];

const Technicians = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <HardHat className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Techniciens Affectés</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="grid gap-4">
          {dummyTechnicians.map((tech) => (
            <Card key={tech.id}>
              <CardHeader>
                <CardTitle className="text-xl">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{tech.speciality}</p>
                  <p>Disponibilité: {tech.availability}</p>
                  <p>{tech.contact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Technicians;