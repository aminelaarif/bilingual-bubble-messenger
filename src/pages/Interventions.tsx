import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "lucide-react";

const dummyInterventions = [
  { id: 1, date: "2024-03-20", type: "Visite technique", technician: "Jean Martin", project: "Rénovation Appartement Paris" },
  { id: 2, date: "2024-03-25", type: "Installation", technician: "Sophie Dubois", project: "Construction Maison Lyon" },
  { id: 3, date: "2024-04-02", type: "Maintenance", technician: "Pierre Leroy", project: "Extension Bureau Marseille" },
  { id: 4, date: "2024-04-05", type: "Inspection", technician: "Marie Lambert", project: "Rénovation Appartement Paris" },
];

const Interventions = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Calendar className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Interventions Planifiées</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="grid gap-4">
          {dummyInterventions.map((intervention) => (
            <Card key={intervention.id}>
              <CardHeader>
                <CardTitle className="text-xl">{intervention.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    {new Date(intervention.date).toLocaleDateString('fr-FR')}
                  </p>
                  <p>Technicien: {intervention.technician}</p>
                  <p>Projet: {intervention.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Interventions;