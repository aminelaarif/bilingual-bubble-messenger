import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

const dummyProjects = [
  {
    id: 1,
    name: "Rénovation Appartement Paris",
    status: "inProgress",
    client: "M. Dubois",
    startDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Construction Maison Lyon",
    status: "pending",
    client: "Mme. Martin",
    startDate: "2024-02-01",
  },
  {
    id: 3,
    name: "Extension Bureau Marseille",
    status: "completed",
    client: "SARL TechPro",
    startDate: "2023-12-01",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{t('projects')}</h1>
      <div className="grid gap-4">
        {dummyProjects.map((project) => (
          <Card 
            key={project.id} 
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl">{project.name}</CardTitle>
              <Badge variant="outline" className="text-sm">
                {t(project.status)}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>{t('client')}: {project.client}</p>
                <p>{t('startDate')}: {new Date(project.startDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;